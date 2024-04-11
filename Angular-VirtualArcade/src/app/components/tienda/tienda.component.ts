import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  cateProduct: { id: string, descripcion: string, slogan: string}[] = [
    { id: '1', descripcion: 'Todos', slogan: '¡Diviértete!'},
    { id: '2', descripcion: 'PlayStation', slogan: 'Jugar no tiene límites'},
    { id: '3', descripcion: 'Xbox', slogan: 'Potencia tus sueños'},
    { id: '4', descripcion: 'Nintendo', slogan: 'No hay un juego / una jugada como este / esta'},
    { id: '5', descripcion: 'PC', slogan:'' }
  ];


  itemElegido: { id: string, descripcion: string, slogan: string} | undefined;

  constructor() {
    // Llama a la función seleccionarCategoria con el primer elemento de cateProduct
    this.seleccionarCategoria(this.cateProduct[0]);
  }

  ngOnInit() {
    // También puedes llamar a la función aquí si necesitas realizar inicializaciones adicionales
  }

  seleccionarCategoria(itemSeleccionado: { id: string, descripcion: string, slogan: string}){
    if (itemSeleccionado && Object.keys(itemSeleccionado).length !== 0) {
      this.itemElegido = itemSeleccionado;
    }
  }
}