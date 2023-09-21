import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  searchValue: string = '';

  changeSearchValue(eventData: any){
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;

  }

  //  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // creating the search method 
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchValue);
  }

}
