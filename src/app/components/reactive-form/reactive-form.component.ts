import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
   
  countries = [ 
    { name: 'USA', value: 'US' },
    { name: 'Canada', value: 'CA' },
    { name: 'India', value: 'IN' },
    
  ];

    reigsterForm:FormGroup=new FormGroup({
      username:new FormControl(null,[Validators.required]),
      firstname:new FormControl(null,[Validators.required]),
      lastname:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      age:new FormControl(null,[Validators.required]),
      gender: new FormControl(null, Validators.required),
      photo: new FormControl(null, [Validators.required]),
   
      country: new FormControl(null, Validators.required)
     
    });


    handleReigster(reigsterForm:FormGroup){
      console.log(reigsterForm.value)
      
    }

   
  
    isValidImage(file: File): boolean {
      const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      return acceptedTypes.includes(file.type);
    }
  }
     

