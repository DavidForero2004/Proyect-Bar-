import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserLogin } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password : string = '';

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) {}

  ngOnInit(): void {
    
  }

  login() {
    if (this.email == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error')
      return
    }

    const user: UserLogin = {
      email: this.email,
      password: this.password
    }

    this._userService.login(user).subscribe({
      next: (response: any) => {
        this.router.navigate(['/users']);
        const token = response.token; // Access the 'token' property of the response object
        localStorage.setItem('token', token); // Here we save only the token
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
      }
    });
  }
}
