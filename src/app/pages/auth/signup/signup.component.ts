import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/components/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formGroup!: FormGroup;
  constructor(
    private router: Router,
    private _authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
      name: [null, Validators.required],
    });
  }
  onSignupClicked() {
    if (this.formGroup.invalid) {
      this.ValidateFormGroub();
    } else {
      this.signup();
    }
  }
  signup() {
    this._authService.signup(this.email.value, this.Password.value).pipe(
      switchMap((user: any) => {
        return this._authService.createUser(
          user.user.uid,
          this.name.value,
          this.email.value
        );
      })
    ).subscribe(()=>{});
  }

  ValidateFormGroub() {
    Object.keys(this.formGroup.controls).forEach((filed) => {
      const control = this.formGroup.get(filed);
      control?.markAsTouched({ onlySelf: true });
    });
  }
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value ';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage() {
    if (this.Password.hasError('required')) {
      return 'You must enter a value ';
    }
    return ' Password Not valid ';
  }
  get email() {
    return this.formGroup.controls['email'] as FormControl;
  }
  get Password() {
    return this.formGroup.controls['password'] as FormControl;
  }
  get name() {
    return this.formGroup.controls['name'] as FormControl;
  }
}
