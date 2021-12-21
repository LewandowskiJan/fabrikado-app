import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public title: string = 'fabrikado-app login';
  public loginForm: FormGroup | undefined;

  public constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.setTitle();
  }

  public setTitle(): void {
    this.titleService.setTitle(this.title);
  }

  public submitLogin(): void {
    this.loginForm?.updateValueAndValidity();
    this.loginForm?.markAllAsTouched;
    console.log('clicked');
    if (this.loginForm?.valid) {
      this.router.navigateByUrl('/cosmos/planets/1');
    }
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
