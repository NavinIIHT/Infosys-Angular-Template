import { FormControl } from '@angular/forms';
import { EmployeeNameValidator } from 'src/app/infy-laptop/employee-name.validator';

describe("Logical | Validator | PhoneNumberValidator", () => {

    it("Verifying the functionality of checkName", () => {
        let control: FormControl = new FormControl();
        control.setValue("John Paul");
        expect(EmployeeNameValidator.checkName(control)).toBe(null);
    })

    it("Verifying the functionality of checkName", () => {
        let control: FormControl = new FormControl();
        control.setValue("John Paul");
        expect(EmployeeNameValidator.checkName(control)).toEqual(null);
    })

    it("Verifying the functionality of checkName | Expecting validation to fail for invalid value: John ", () => {
        let control: FormControl = new FormControl();
        control.setValue("John P");
        expect(EmployeeNameValidator.checkName(control)).toEqual({ checkName: true });
    })
})