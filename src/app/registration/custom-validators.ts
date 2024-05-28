import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const passwordConfirmation = control.get('passwordConfirmation')?.value;
    if (password !== passwordConfirmation) {
      return { passwordMismatch: true };
    }
    return null;
  }
}
