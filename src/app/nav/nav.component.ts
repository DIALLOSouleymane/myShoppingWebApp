import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-nav',
  // To use a selector like a HTML attributes, we proceed like this
  // selector: '[app-nav]',

  /* 
    to use the selector like a css class, we put .in front of the selector value like this :
  */
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor() { }

  ngOnInit(): void{

  }
  siteName: string = 'eShopping';

}
