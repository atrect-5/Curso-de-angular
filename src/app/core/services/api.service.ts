import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) {
    console.log(environment.API_URL);
    console.log(environment.API_TOKEN);

   }

   // Creamos la funcion que mandara la peticion http a nuestra api para obtener la informacion
   getHttp():Observable<any>{
    return this.httpClient.get(`${environment.API_URL}?language=es&q=news&apiKey=${environment.API_TOKEN}`)
   }

}
