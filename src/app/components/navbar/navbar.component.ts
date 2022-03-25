import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Input() titulo: string;/* utilizamos el decorador input para recibir un dato del componente padre se registra en ese componente entre corchetes y entre 3 comillas el contenido, se declara sea un string y se inicialiaza en el constructor dentro de las llaves */
  constructor() {
    this.titulo=""
   }

  ngOnInit(): void {
  }

}
