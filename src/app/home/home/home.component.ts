import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ApiService } from '../../core/services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  // Creamos la variable donde obtendremos la respuesta del api
  news:any;
  // Determinamos el estado de la progressBar
  isLoading = true;

  constructor(private apiService:ApiService, public datePipe: DatePipe){}

  // Creamos nuestra funcion asincrona (Ya que esperara una respuesta) que hara la peticion http a nuestra api por medio de nuestro servicio 'api.service'
  async ngOnInit(){
    await this.apiService
    .getHttp() // Nuestra funcion de 'api.service'
    .toPromise()
    .then((data:Response)=>{
      this.news=data
    }).catch(
      // En caso de error, nos aparece el error en consola
      (error)=> console.error(error.error.message)
      );

      this.isLoading = false;

      console.log(this.news);

  }

}
