import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ApsService } from 'src/app/shared/aps.service';
import { GenericService } from 'src/app/shared/generic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: UntypedFormGroup;
  password = '';
  errorMessage: string = '';
  submitted = false;
  userName: string = '';

  constructor(
    public formBuilder: UntypedFormBuilder,
    public apsService: ApsService,
    public genericService: GenericService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  newMessage() {
    this.genericService.shareUsername(this.userName);
  }

  onSubmit(form: any) {
    this.submitted = true;
    this.apsService.loginmethod(form.value).subscribe({
      next: (data) => {
        let userMail = data['email'];
        this.userName = userMail.split('@')[0];
        let idToken = data['idToken'];
        this.apsService.setTokenMethod(data.idToken);
        this.apsService.canAuthenticated();
        this.newMessage();
      },
      error: (data) => {
        this.errorMessage = data.error.error.message;
      },
    });
  }
}
