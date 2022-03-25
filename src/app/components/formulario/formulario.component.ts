import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
@Output() parametrosSeleccionados = new EventEmitter<any>()



/* creamos dos variables que se usaran con el model de ng model para tener las categorais que apareceran en el formulario al cargar la pagina por defecto */
  categoriaSeleccionada="general";
  paisSeleccionado="ar";

  categorias: any[]=[/* creamos un array de tipo any que contiene objetos se utilizara para iterar con ngfor en las opciones del formulario */
    {value:'general',name:'General'},
    {value:'business',name:'Negocios'},
    {value:'entertaiment',name:'Entretenimiento'},
    {value:'healt',name:'Salud'},
    {value:'science',name:'Ciencias'},
    {value:'sports',name:'Deportes'},
    {value:'technology',name:'Tecnologia'},
    
  ]
  paises:any[]=[
    {value:'ar',name:'Argentina'},
    {value:'br',name:'Brasil'},
    {value:'fr',name:'Francia'},
    {value:'hu',name:'Hungria'},
    {value:'mx',name:'Mexico'},
    {value:'gb',name:'Reino Unido'},
  ]

  

  constructor() { }

  ngOnInit(): void {
  }


  buscarNoticia(){ /* este metodo sirve para enviar a traves del deco output los datos que se seleccionan en una constante que se llama parametros */
    const PARAMETROS={
      categoria: this.categoriaSeleccionada,
      pais:this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS)
  }
}
