import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  // templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      
  }

  products = [
    {id:1, name: 'Analog Watch', price: '3000', color: 'black', available: 'Available', image: 'assets/products/1.jpg'},
    {id:2, name: 'Analog Watch', price: '3015', color: 'brown', available: 'Not Available', image: 'assets/products/2.jpg'},
    {id:3, name: 'Modern Car', price: '300M', color: 'black', available: 'Available', image: 'assets/products/8.jpg'},
    {id:4, name: 'Modern Car V2', price: '405M', color: 'black', available: 'Not Available', image: 'assets/products/9.jpg'},
    {id:5, name: 'Scooter', price: '390M', color: 'black', available: 'Available', image: 'assets/products/10.jpg'},
    {id:6, name: 'New Version Car', price: '390M', color: 'white', available: 'Not Available', image: 'assets/products/12_bis.jpg'},
    {id:7, name: 'Traditional Clothes', price: '30000', color: 'black', available: 'Available', image: 'assets/products/blackness.jpg'},
    {id:8, name: 'Client PC', price: 'free', color: 'black', available: 'Available', image: 'assets/products/un.jpeg'},

  ];

  // creons quelques methodes ici
  getTotalProducts(){
    return this.products.length;
  }

  getTotalAvailableProduct(){
    return this.products.filter(produit => produit.available === 'Available').length;
    // en effet filter renvoie un tableau de tous produits dispo
  }

  getTotalNotAvailableProduct(){
    return this.products.filter(produit => produit.available === 'Not Available').length;
    // en effet filter renvoie un tableau de tous produits dispo
  }


  productCountRadioButton: string = 'All';

  onFilterradioButtonChanged(data: string){
    this.productCountRadioButton = data;
    // verification
    // console.log(this.productCountRadioButton);
  }

  // creating a property for the search box
  searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }

}
