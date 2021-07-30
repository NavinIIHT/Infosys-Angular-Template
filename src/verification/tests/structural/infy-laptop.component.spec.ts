import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { InfyLaptopComponent } from 'src/app/infy-laptop/infy-laptop.component';
import { InfyLaptopService } from 'src/app/infy-laptop/infy-laptop.service';
import { SuccessMessagePipe } from 'src/app/infy-laptop/success-message.pipe';

class InfyLaptopServiceStub {
  register() { }

}

describe('Structural | Component | InfyLaptopComponent', () => {
  let component: InfyLaptopComponent;
  let fixture: ComponentFixture<InfyLaptopComponent>;
  let pickAMeetingService: InfyLaptopService;

  beforeEach(async(() => {
    TestBed.configureTestingModule
      ({
        imports: [RouterTestingModule, ReactiveFormsModule],
        declarations: [InfyLaptopComponent, SuccessMessagePipe],
        providers: [{ provide: InfyLaptopService, useClass: InfyLaptopServiceStub }]
      }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfyLaptopComponent);

    component = fixture.componentInstance;
    pickAMeetingService = TestBed.get(InfyLaptopService);
    fixture.detectChanges();
    jasmine.MAX_PRETTY_PRINT_DEPTH = 2;
  });

  it('Verifying the Structure of InfyLaptopComponent', () => {
    expect(component).toBeTruthy();
  });

  it("Verifying the structure of RegistrationForm", () => {
    component.ngOnInit();
    expect(component.registrationForm).toBeDefined();
  });

  /* ----------------------schedule Form Fields : Binding ------------------------ */

  describe('RegistrationForm', () => {
    let regFormTag: DebugElement;
    let emailInputTag: DebugElement;
    let phoneInputTag: DebugElement;
    let employeeNameInputTag: DebugElement;
    let dateOfJoiningInputTag: DebugElement;
    let makeTag: DebugElement;


    beforeEach(() => {
      regFormTag = fixture.debugElement.query(By.css('form'));
      emailInputTag = fixture.debugElement.query(By.css("input[type='email']"));
      dateOfJoiningInputTag = fixture.debugElement.query(By.css("input[type='date']"));
      employeeNameInputTag = fixture.debugElement.query(By.css("input[type='text']"));
      phoneInputTag = fixture.debugElement.query(By.css("input[type='radio']"));
      makeTag = fixture.debugElement.query(By.css("select"));

    });

    it('Verifying the structure of RegistrationForm | Expecting FormGroup Binding to be accurate', () => {
      expect(regFormTag.attributes['ng-reflect-form']).toBeTruthy();
    });


    it('Verifying the structure of RegistrationForm | Expecting formControlName binding to be accurate for employeeName', () => {
      expect(employeeNameInputTag.attributes['formControlName']).toBe('employeeName');
    });


    it('Verifying the structure of RegistrationForm | Expecting formControlName binding to be accurate for emailId', () => {
      expect(emailInputTag.attributes['formControlName']).toBe('emailId');
    });
    it('Verifying the structure of RegistrationForm | Expecting formControlName binding to be accurate for phone no', () => {
      expect(phoneInputTag.attributes['formControlName']).toBe('gender');
    });
    it('Verifying the structure of RegistrationForm | Expecting formControlName binding to be accurate for dateOfJoining', () => {
      expect(dateOfJoiningInputTag.attributes['formControlName']).toBe('joiningDate');
    });

  });

  describe("RegistrationForm | Usage of Bootstrap Classes", () => {
    describe("RegistrationForm | Usage of Bootstrap Classes", () => {
      let regFormTag: DebugElement;
      let emailInputTag: DebugElement;
      let phoneInputTag: DebugElement;
      let employeeNameInputTag: DebugElement;
      let dateOfJoiningInputTag: DebugElement;

      let employeeNameErrorTag: DebugElement;

      let phoneErrorTag: DebugElement;
      let dateOfJoiningErrorTag: DebugElement;
      let emailErrorTag: DebugElement;


      beforeEach(() => {
        component.registrationForm.controls['emailId'].setValue(null);

        component.registrationForm.controls['employeeName'].setValue(null);
        component.registrationForm.controls['gender'].setValue(null);
        component.registrationForm.controls['joiningDate'].setValue(null);
        component.registrationForm.controls['make'].setValue(null);


        component.registrationForm.controls['emailId'].markAsDirty();

        component.registrationForm.controls['employeeName'].markAsDirty();
        component.registrationForm.controls['joiningDate'].markAsDirty();
        component.registrationForm.controls['make'].markAsDirty();
        component.registrationForm.controls['gender'].markAsDirty();

        fixture.detectChanges();

        regFormTag = fixture.debugElement.query(By.css('form'));

        emailInputTag = fixture.debugElement.query(By.css("input[type='email']"));
        dateOfJoiningInputTag = fixture.debugElement.query(By.css("input[type='date']"));
        employeeNameInputTag = fixture.debugElement.query(By.css("input[type='text']"));
        phoneInputTag = fixture.debugElement.query(By.css("input[type='radio']"));
        
        dateOfJoiningErrorTag = fixture.debugElement.query(By.css('#joiningDateError'));
        emailErrorTag = fixture.debugElement.query(By.css('#emailIdError'));
        employeeNameErrorTag = fixture.debugElement.query(By.css('#employeeNameError'));
      });

      // it("Verifying the structure of RegistrationForm | Expecting form class in regForm", () => {

      //   console.log(expect(regFormTag.attributes['class']).toContain('form'));
      // });

      it("Verifying the structure of RegistrationForm | Expecting form-control class in phone", () => {

        expect(phoneInputTag.attributes['class']).toContain('form-check-input');
      });

      it("Verifying the structure of RegistrationForm | Expecting form-group class around empName", () => {
        expect(employeeNameInputTag.parent.attributes['class']).toContain('form-group');
      });

      it("Verifying the structure of RegistrationForm | Expecting form-control class in email", () => {

        expect(emailInputTag.attributes['class']).toContain('form-control');
      });

      // it("Verifying the structure of RegistrationForm | Expecting form-control class in phone", () => {

      //   expect(phoneInputTag.attributes['class']).toContain('form-control');
      // });

      it("Verifying the structure of RegistrationForm | Expecting form-group class around phone", () => {
        expect(phoneInputTag.parent.attributes['class']).toContain('form-check');
      });

      it("Verifying the structure of RegistrationForm | Expecting form-control class in dateOfJoining", () => {

        expect(dateOfJoiningInputTag.attributes['class']).toContain('form-control');
      });

      it("Verifying the structure of RegistrationForm | Expecting text-danger class in employeeNameError", () => {
        expect(employeeNameErrorTag.attributes['class']).toContain('text-danger');
      });

      it("Verifying the structure of RegistrationForm | Expecting text-danger class in purposeErrorTag", () => {
        expect(emailErrorTag.attributes['class']).toContain('text-danger');
      });

      it("Verifying the structure of RegistrationForm | Expecting text-danger class in dateOfMeetingErrorTag", () => {
        expect(dateOfJoiningErrorTag.attributes['class']).toContain('text-danger');
      });

    });

  });
});





















