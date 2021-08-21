import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre:string;
  otro:string;
  color:string;


  constructor() { 
    this.nombre = "rojo";
    this.otro = "verde";
    this.color = "negado";
  }  

  cambiarColor():void{
    if (this.nombre == "rojo"){
      this.color = "permitido";
      this.nombre = "verde";
      this.otro = "rojo";
    }else{
      this.color = "negado";
      this.nombre = "rojo";
      this.otro = "verde";
    }
  }

  ngOnInit(): void {
  }

}
