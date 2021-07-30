require("colors");
const Descriptive = require("./Descriptive");
const ReportGenerator = require('./ReportGenerator');

var VerificationReporter = function()
{
    let testCaseReports;
    let testCaseIdMap = {};

    let browserStarted = false;
    let totalTestCases = 0;

    let isDescriptive = Descriptive.isDescriptive();

    this.onBrowserStart = function (browser)
    {
        browserStarted = true;
        totalTestCases = browser.lastResult.total;

        testCaseReports = [];
    };

    this.onSpecComplete = function (browser, result)
    {
        if (result.success)
        {
            console.log("\u2713".green, '-', result.suite[0], "-", result.description)
        }
        else
        {
            console.log("\u2717".red, '-', result.suite[0], "-", result.description);
        }

        let testCaseReport = {};

        let suiteName = result.suite[0];
        let suiteNameChunks = suiteName.split(" | ");

        testCaseReport.cadre = suiteNameChunks.shift();
        testCaseReport.group = suiteNameChunks.shift();
        testCaseReport.testClass = suiteNameChunks.shift();
        testCaseReport.testCaseId = this.generateTestCaseId(testCaseReport.cadre, testCaseReport.testClass);

        let specNameChunks = result.description.split(" | ");

        testCaseReport.testCaseName = specNameChunks.shift();

        if (specNameChunks.length > 0 && isDescriptive)
        {
            testCaseReport.testCaseDescription = specNameChunks.join(" | ");
        }

        testCaseReport.result = result.success ? "Pass" : "Fail";
        
        if (! result.success && isDescriptive)
        {
            let failureLogs = result.log[0];

            testCaseReport.reasonForFailure = failureLogs.split("\n").slice(0,3).join("\n");
        }

        testCaseReports.push(testCaseReport);
    };

    this.onRunComplete = function (browsers, result)
    {
        if (!browserStarted && result.exitCode == 1)
        {
            console.log("\nCompilation Error!".red.bold)
        }
        else
        {
            console.log("\nExecuted", `${totalTestCases}`.blue, "test cases | Passed:", `${result.success}`.green, "| Failed:", `${result.failed}`.red);

            if (result.error)
            {
                console.log("Runtime error(s) had been encountered, which might have led to incomplete execution!".red.bold);
            }

            ReportGenerator.generateReports(testCaseReports);
        }
    };

    this.generateTestCaseId = function (cadre, testClass)
    {
        let testCaseId = (cadre == "Structural" ? "STC" : "LTC");

        if (testCaseIdMap[testClass] != undefined)
        {
            testCaseIdMap[testClass] += 1
        }
        else
        {
            testCaseIdMap[testClass] = 1
        }
        
        testCaseId = testCaseId.concat(testCaseIdMap[testClass]).concat("-").concat(testClass);

        return testCaseId;
    };
}

module.exports =
{
    'reporter:VerificationReporter': ['type', VerificationReporter]
};