const fs = require("fs");

class ReportGenerator
{
    static overallReport;
    static detailedReport;

    static generateReports = function(testCaseReports)
    {
        ReportGenerator.generateOverallReport(testCaseReports);
        ReportGenerator.generateDetailedReport(testCaseReports);
        ReportGenerator.writeReports();
    }

    static generateOverallReport = function(testCaseReports)
    {
        let groupWiseReport;
        let classWiseReport;
        let testCaseCount;

        for (let testCaseReport of testCaseReports)
        {
            if (ReportGenerator.overallReport == undefined)
            {
                ReportGenerator.overallReport = {};
            }

            groupWiseReport = ReportGenerator.overallReport[testCaseReport.cadre];

            if (groupWiseReport == undefined)
            {
                groupWiseReport = {};
            }

            classWiseReport = groupWiseReport[testCaseReport.group];

            if (classWiseReport == undefined)
            {
                classWiseReport = {};
            }

            testCaseCount = classWiseReport[testCaseReport.testClass];

            if (testCaseCount == undefined)
            {
                testCaseCount = [0, 0, 0];
            }

            testCaseCount[0] += 1;

            if ("Pass" == testCaseReport.result)
            {
                testCaseCount[1] += 1;
            }
            else if ("Fail" == testCaseReport.result)
            {
                testCaseCount[2] += 1;
            }

            classWiseReport[testCaseReport.testClass] = testCaseCount;
            groupWiseReport[testCaseReport.group] = classWiseReport;
            
            ReportGenerator.overallReport[testCaseReport.cadre] = groupWiseReport;
        }
    }

    static generateDetailedReport = function(testCaseReports)
    {
        let groupWiseReport;
        let classWiseReport;
        let testCaseList;

        for (let testCaseReport of testCaseReports)
        {
            if (ReportGenerator.detailedReport == undefined)
            {
                ReportGenerator.detailedReport = {};
            }

            groupWiseReport = ReportGenerator.detailedReport[testCaseReport.cadre];

            if (groupWiseReport == undefined)
            {
                groupWiseReport = {};
            }

            classWiseReport = groupWiseReport[testCaseReport.group];

            if (classWiseReport == undefined)
            {
                classWiseReport = {};
            }

            testCaseList = classWiseReport[testCaseReport.testClass];

            if (testCaseList == undefined)
            {
                testCaseList = [];
            }

            testCaseList.push(testCaseReport);
            classWiseReport[testCaseReport.testClass] = testCaseList;
            groupWiseReport[testCaseReport.group] = classWiseReport;
            ReportGenerator.detailedReport[testCaseReport.cadre] = groupWiseReport;
        }
    }

    static writeReports = function()
    {
		if (fs.existsSync("OverallReport.json"))
        {
            fs.unlinkSync("OverallReport.json");
        }
        
        if (fs.existsSync("DetailedReport.json"))
        {
            fs.unlinkSync("DetailedReport.json");
        }
		
        fs.writeFileSync("OverallReport.json", JSON.stringify(ReportGenerator.overallReport));
        fs.writeFileSync("DetailedReport.json", JSON.stringify(ReportGenerator.detailedReport));
    }
}

module.exports = ReportGenerator;