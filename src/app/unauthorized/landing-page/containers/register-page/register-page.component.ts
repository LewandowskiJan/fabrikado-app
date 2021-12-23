import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  public title: string = 'fabrikado-app registration';
  public registerForm: FormGroup | undefined;
  public color: string = 'BLUE-GREEN';
  private formSubscription: Subscription | undefined;

  public constructor(private titleService: Title, private fb: FormBuilder) {
    this.createForm();
  }

  public ngOnInit(): void {
    this.setTitle();
    this.formSubscription = this.registerForm?.valueChanges
      .pipe(tap((res: any) => console.log('register:', res)))
      .subscribe(() => {
        this.registerForm?.invalid &&
        (this.registerForm?.touched || this.registerForm?.dirty)
          ? (this.color = 'RED')
          : (this.color = 'BLUE-GREEN');
      });
  }

  public ngOnDestroy(): void {
    this.formSubscription && this.formSubscription.unsubscribe();
  }

  public setTitle(): void {
    this.titleService.setTitle(this.title);
  }

  private createForm(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      login: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }
}
