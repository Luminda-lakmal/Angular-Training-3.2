import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentreg',
  templateUrl: './studentreg.component.html',
  styleUrls: ['./studentreg.component.scss']
})
export class StudentregComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  courses: any = [];
  students: any = [];
  registrations: any = [];
  registrationForm!: FormGroup;

  ngOnInit(): void {

    this.students = [
      { id: 1, name: 'Janaka', email: 'j@g.com', registration_number: 'IT20240001' },
      { id: 2, name: 'Chanaka', email: 'j@g.com', registration_number: 'IT20240002' },
    ];

    this.courses = [
      { id: 1, code: 'IT', name: 'Information Technology' },
      { id: 2, code: 'SE', name: 'Software Engineering' },
      { id: 3, code: 'CSN', name: 'Computer systems and Networking' },
      { id: 4, code: 'IS', name: 'Information Systems' }
    ];

    this.registrationForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      registration_number: [''],
      email: ['', [Validators.email]]
    });

  }
  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    const currentYear = new Date().getFullYear();

    this.registrationForm.patchValue({
      id: this.students.length + 1
    });

    const runningNumber = `${this.registrationForm.get('id')?.value + 10000}`.substring(1);

    this.registrationForm.patchValue({
      registration_number: `${this.registrationForm.get('registration_number')?.value}${currentYear}${runningNumber}`
    });

    this.students.push(this.registrationForm.value);

    console.log('Form Submitted Successfully:', this.registrationForm.value);
    this.registrationForm.reset();
  }

}
