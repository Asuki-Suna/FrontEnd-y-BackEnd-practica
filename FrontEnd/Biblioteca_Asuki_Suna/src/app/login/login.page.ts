import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;

  constructor(private router: Router) { }
  ngOnInit() {

  }

  
  onSubmit(){
    this.router.navigateByUrl("/library")
  }
  loginForm(){

  }

}
