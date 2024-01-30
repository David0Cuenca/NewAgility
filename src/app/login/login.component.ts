import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router,
    private toastr:ToastrService) {

      this.loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.required]),
        password: new FormControl('', [Validators.required, Validators.required]),
      });
     }

  ngOnInit() {

  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      if (username=='admin' && password == '1234'){
        this.router.navigate(['/dashboard']);
      }else{
        this.toastr.error('Usuario o contraseña no validos');
      }
      
    } else {
      this.toastr.error('Usuario o contraseña no validos');
    }
  }
  get loginFormControl(){
    return this.loginForm.controls;
  }
}
