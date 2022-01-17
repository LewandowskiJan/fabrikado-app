import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { environment } from '@src/environments/environment';

import { Credentials } from '../../model/credentials';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public title: string = 'fabrikado-app login';
  public loginForm: FormGroup | undefined;
  public color: string = 'BLUE-GREEN';
  private formSubscription: Subscription | undefined;
  public constructor(
    private titleService: Title,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.setTitle();
    if (this.loginForm && environment.test) {
      this.loginForm.patchValue({
        login: 'abc',
        password: '123',
      });
    }
    this.formSubscription = this.loginForm?.valueChanges.subscribe(() => {
      this.loginForm?.invalid &&
      (this.loginForm?.touched || this.loginForm?.dirty)
        ? (this.color = 'RED')
        : (this.color = 'BLUE-GREEN');
    });
  }

  ngOnDestroy(): void {
    this.formSubscription && this.formSubscription.unsubscribe();
  }

  public setTitle(): void {
    this.titleService.setTitle(this.title);
  }

  public submitLogin(): void {
    this.loginForm?.updateValueAndValidity();
    this.loginForm?.markAllAsTouched;

    if (this.loginForm?.valid) {
      const credentials: Credentials = {
        login: this.loginForm.get('login')?.value,
        password: this.loginForm.get('password')?.value,
      };
      this.loginService
        .sendUserCredentials(credentials)
        .pipe(take(1))
        .subscribe();
    }
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
