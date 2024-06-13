import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent  {

  countries = [ 
    { name: 'USA', value: 'US' },
    { name: 'Canada', value: 'CA' },
    { name: 'India', value: 'IN' },
    
  ];

  onSubmit(f){
    console.log(f.value)

  }

  isValidImage(file: File): boolean {
    const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    return acceptedTypes.includes(file.type);
  }
 
}
