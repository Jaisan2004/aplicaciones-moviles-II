import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  listaCarrito: {id: string, nombre: string, precio: string, categoria: string, cantidad: number}[] | undefined;

  ngOnInit(): void{
    //let carritoStorage = localStorage.getItem("carrito") as string;
    //let carrito = JSON.parse(carritoStorage);
    //this.listaCarrito = carrito;
  }
}
