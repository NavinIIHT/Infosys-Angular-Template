import { AbstractControl } from "@angular/forms";

export class EmployeeNameValidator {
    static checkName(name: AbstractControl) :{'checkName':true} | null {
        return null;
    }
}
