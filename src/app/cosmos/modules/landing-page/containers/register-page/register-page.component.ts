import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public title: string = 'fabrikado-app registration';
  public registerForm: FormGroup | undefined;

  public constructor(private titleService: Title, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.setTitle();
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
