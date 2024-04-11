import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { ItemCarrito } from '../entities/ItemCarrito';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() categoriaX: { id: string, descripcion: string, slogan: string} | undefined;

  videojuego: {id: string, nombre: string, precio: string, categoria: string,imagen: string}[] = [
    { id: '1', nombre: 'dantes inferno', precio: '59.900', categoria: '3', imagen: 'https://store-images.s-microsoft.com/image/apps.2805.65125427675965946.9a11f22d-d015-4e5d-8fe2-d22c387be19c.55436672-743e-4c6f-b104-ddca23969d53?q=90&w=177&h=265' },
    { id: '2', nombre: 'God of War: Ragnarök', precio: '259.900', categoria: '2', imagen: 'https://acdn.mitiendanube.com/stores/002/596/264/products/ps4ps5-copy301-a670c50cc5861c00c316826627833603-1024-1024.jpeg' },
    { id: '3', nombre: 'God of War', precio: '90.000', categoria: '2', imagen: 'https://acdn.mitiendanube.com/stores/002/596/264/products/ps4ps5-copy191-40956a744720dd3bc116824433126025-1024-1024.jpeg' },
    { id: '4', nombre: 'Gran Turismo 7', precio: '300.000', categoria: '2', imagen: 'https://acdn.mitiendanube.com/stores/002/596/264/products/ps4ps5-copy141-7c7479c9bd8d0be69716833871964638-640-0.jpeg' },
    { id: '5', nombre: 'Hogwarts Legacy', precio: '255.000', categoria: '2', imagen: 'https://juegosdigitalescolombia.com/files/images/productos/1675969318-hogwarts-legacy-digital-deluxe-edition-pre-orden-ps5-0.jpg' },
    { id: '6', nombre: 'Hogwarts Legacy', precio: '180.000', categoria: '3', imagen: 'https://http2.mlstatic.com/D_NQ_NP_971926-MLA54717652867_032023-O.webp" class="card-img-top' },
    { id: '7', nombre: 'Super Smash Bros. Ultimate', precio: '216.000', categoria: '4', imagen: 'https://gamestorecolombia.com/files/images/productos/1637876703-super-smash-bros-ultimate.jpg' },
    { id: '8', nombre: 'Grand Theft Auto V', precio: '160.000', categoria: '2', imagen: 'https://gamestorecolombia.com/files/images/productos/1658512355-grand-theft-auto-v-nueva-generacion-ps5-0.jpg' },
    { id: '9', nombre: 'Mortal Kombat 1', precio: '250.000', categoria: '2', imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/1515/977949d5f15fce820e9a4d4a96caa9da2151dbea45868fd9.jpg' },
    { id: '10', nombre: 'Grand Theft Auto V', precio: '80.000', categoria: '3', imagen: 'https://www.juegosdigitalescolombia.com/files/images/productos/1651942843-grand-theft-auto-v-gta-v-xbox-series-xs-0.jpg' },
    { id: '11', nombre: 'Call of Duty: Black Ops Cold War', categoria: '3', precio: '389.900', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLr36qP8fShpdOFrDxSFVVLDSyzT9esvD17UNHPRMJ0g&s' },
    { id: '12', nombre: 'EA Sports FC 24', precio: '220.000', categoria: '3', imagen: 'https://juegosdigitalescolombia.com/files/images/productos/1695950731-ea-sports-fc-24-ps5-pre-orden-0.jpg' }
  ];


  productosFiltrados: {id: string, nombre: string, precio: string, categoria: string, imagen: string}[] | undefined;


  ngOnChanges(): void{
    if(this.categoriaX){
      this.filtrarProductosPorCategoria(this.categoriaX.id);
    }
  }

  filtrarProductosPorCategoria(idCategoria: string){
    if(idCategoria !== '1'){
      this.productosFiltrados = this.videojuego.filter(producto => producto.categoria === idCategoria);
      console.log(this.productosFiltrados);
    }else{
      this.productosFiltrados = this.videojuego;
      console.log(this.productosFiltrados);
    }
    
  }

  agregarCarrito(item: {id: string, nombre: string, precio: string, categoria: string, imagen: string}){
    let iCarrito:{id: string, nombre: string, precio: string, categoria: string, cantidad: number}=
    {id: item.id, nombre: item.nombre, precio: item.precio, categoria: item.categoria, cantidad: 1};

    if(localStorage.getItem("carrito") === null){

      let carrito: {id: string, nombre: string, precio: string, categoria: string, cantidad: number}[] = [];
      carrito.push(iCarrito);
      localStorage.setItem("carrito", JSON.stringify(carrito));

    }else{

      let agregarCarrito = localStorage.getItem("carrito") as string;
      let carrito = JSON.parse(agregarCarrito);
      let index = -1;
      for(let i=0; i<carrito.length; i++){
        let itemC: ItemCarrito = carrito[i];
        if(iCarrito.id === itemC.id){
          index = i;
          break;
        }
      }
      if(index === -1){
        carrito.push(iCarrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }else{
        let itemCarrito: ItemCarrito = carrito[index];
        itemCarrito.cantidad!++;
        carrito[index] = itemCarrito;
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }

    }

  }

}