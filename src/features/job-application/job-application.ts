import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-application',
  imports: [],
  templateUrl: './job-application.html',
  styleUrl: './job-application.scss',
})
export class JobApplication {
  private fb = inject(FormBuilder);
  countries = [
    {
      name: 'India',
      states: [
        'Karnataka',
        'Delhi',
        'Maharastra',
      ]
    },
    {
      name: 'USA',
      states: [
        'Texas',
        'California'
      ]
    }
  ];

  states: string[] = [];

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    country: [''],
    state: [''],
    employmentType: ['Employeed'],
    company: [''],
    experience: [0],
    currentSalary: [0],
    expectedSalary: [0],
    skills: this.fb.array([])
  });

  
}
