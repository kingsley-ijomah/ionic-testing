import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registrationForm: FormGroup; // Define the form group for the registration form

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form with form controls and validators
    this.registrationForm = this.formBuilder.group({
      fullName: ['', [Validators.required]], // Full name field with validators
      email: ['', [Validators.required, Validators.email]], // Email field with validators
      password: ['', [Validators.required, Validators.minLength(6)]], // Password field with validators
      passwordConfirmation: ['', [Validators.required, Validators.minLength(6)]] // Password confirmation field with validators
    }, { validators: CustomValidators.passwordMatch });
  }

  ngOnInit() {}

  // Handle form submission
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value); // Log form values to the console
      // Here you would send the form data to your Devise backend
    } else {
      this.validateAllFormFields(this.registrationForm); // Validate all fields to show validation errors
    }
  }

  // Validate all form fields
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control) {
        if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        } else {
          control.markAsTouched({ onlySelf: true });
        }
      }
    });
  }
}
