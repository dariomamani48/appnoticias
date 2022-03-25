import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  listNoticias:any[]=[];
  loading=false

  constructor(private _noticiaService: NoticiaService){/* aqui inyectamos el servisio que hace la peticion http */

  }

buscarNoticias(parametros:any){/* este metodo se pasa a traves del html del padre en un evento que recibe los datos del componente hijo , estos datos se reciben como parametros que podemos utilizar */
  this.loading=true
  this.listNoticias=[];

  setTimeout(() => {
    this._noticiaService.getNoticias(parametros).subscribe(data=>{
      this.loading=false;
      this.listNoticias=data.articles;
    },error=>{
      console.log(error)
      this.loading=false
    })
  }, 2000);
  
}


}
