import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  listaCarrito: {id: string, nombre: string, precio: number, categoria: string, cantidad: number}[] | undefined;

  ngOnInit(): void{
    let carritoStorage = localStorage.getItem("carrito") as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaCarrito = carrito;
  }

  vaciarCarrito(){
    localStorage.clear();
    this.listaCarrito = [];
  }
}
