import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;

  constructor(private router: Router) { }
  // , public formBuilder: FormBuilder
  ngOnInit() {

  }
  // this.ionicForm = this.formBuilder.group({
  //   email: ['',[ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),],],
  //   password: ['', [Validators.required, Validators.pattern('^[a-z0-9]+$')]],
  // get errorControl() {
  //   return this.ionicForm.controls;
  // }
  // submitForm = () => {
  //   if (this.ionicForm.valid) {
  //     console.log(this.ionicForm.value);
  //     return false;
  //   } else {
  //     return console.log('Please provide all the required values!');
  //   }
  // };
  
  onSubmit(){
    this.router.navigateByUrl("/library")
  }
  loginForm(){

  }

}
