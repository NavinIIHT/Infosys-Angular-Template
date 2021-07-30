import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { InfyLaptopService } from './infy-laptop.service';
import { EmployeeNameValidator } from './employee-name.validator';

@Component({
  selector: 'app-infy-laptop',
  templateUrl: './infy-laptop.component.html',
  styleUrls: ['./infy-laptop.component.css']
})
export class InfyLaptopComponent implements OnInit {

//Stores errorMessage, returned by webservice in case of unsuccessful response
errorMessage: string;
makeList:any[]=["DELL", "TOSHIBA", "ASUS", "APPLE", "LENOVO" ];
//Stores registrationId, returned by webservice in case of successful response
registrationId: number;

//Stores a formgroup object
registrationForm: FormGroup;
  constructor() { }

  ngOnInit() {

  }

  register() {

  }

}
