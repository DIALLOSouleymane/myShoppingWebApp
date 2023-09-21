import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
      
  }

  // decorator
  @Input() all : number = 0;
  // We also can use an alias like this : 
  // @Input('Total) all : number = 0;
  // But in this way it's compulsory to use the alias name to reference the variable
  // input property : receves data from the parent component
  @Input() available : number = 0;
  @Input() notAvailable : number = 0;

  selectedRadioButtonValue : string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // verification :
    // console.log(this.selectedRadioButtonValue);
  }

}
