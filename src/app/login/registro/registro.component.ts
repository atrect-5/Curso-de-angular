import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { group } from 'console';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  //Iniciamos las variables del formulario que crearemos
  userForm:FormGroup;
  titulo='Registrate';

  constructor (private formBuilder:FormBuilder,
    private cookieService: CookieService,){
    // Creamos los campos correspondientes de nuestro formulario
    this.userForm = this.formBuilder.group({
      // Agregamos los campos que necesitaremos para nuestro registro
      grupo1: this.formBuilder.group({
        nombre:['', [Validators.required]],
        apellido:['', [Validators.required]],
        email:['', [Validators.required, Validators.email]]
      }),
      grupo2: this.formBuilder.group({
        user: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
      })
    });
  }


  get userField(){
    return this.userForm.get('grupo2.user')
  }
  get passwordField(){
    return this.userForm.get('grupo2.password')
  }
  get nameField(){
    return this.userForm.get('grupo1.nombre')
  }
  get lastNameField(){
    return this.userForm.get('grupo1.apellido')
  }
  get emailField(){
    return this.userForm.get('grupo1.email')
  }
  get confirmPasswordField(){
    return this.userForm.get('grupo2.confirmpassword')
  }

  registrarse(){
  // Checamos si nuestro formulario esta debidamente lleno
  if (this.userForm.valid){
    this.cookieService.set('Registro','Se registro')
  }
  else{
    alert('Debe llenar debidamente los campos')
  }}

}