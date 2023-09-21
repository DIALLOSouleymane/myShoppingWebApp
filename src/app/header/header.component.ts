import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
      
  }
  slogan: string = "Your one stop shop for everything."
  source: string = "/assets/Shopping-PNG-Background-Image.png"

  getSlogan(){
    return 'This a new slogan for our Web application!'
  }

}
