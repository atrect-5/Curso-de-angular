import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //Iniciamos las variables del formulario que crearemos
  userForm:FormGroup;
  titulo='Iniciar Sesion';

  constructor (private formBuilder:FormBuilder,
              private cookieService: CookieService,
              private router:Router
  ){
    // Creamos los campos correspondientes de nuestro formulario
    this.userForm = this.formBuilder.group({
      // Indicamos que ambos campos son necesarios y que 'password' debe ser mayor a 8
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  // Creamos las funciones para obtener los valores de nuestros campos 'user' y 'password'
  get userField(){
    return this.userForm.get('user')
  }
  get passwordField(){
    return this.userForm.get('password')
  }

  login(){
    // Checamos si nuestro formulario esta debidamente lleno
    if (this.userForm.valid){
      this.cookieService.set('Registro','Se registro')
    }
    else{
      alert('Debe llenar debidamente los campos')
    }
  }

}
