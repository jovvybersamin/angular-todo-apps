import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todofilter',
  templateUrl: './todofilter.component.html',
  styleUrls: ['./todofilter.component.css']
})
export class TodofilterComponent implements OnInit {
  visibility = 'All';
  @Output() visibilityChange = new EventEmitter<string>();

  constructor() { }


  ngOnInit() {
  }

  setVisibility(visibility: string) {
    this.visibility = visibility;
    console.log(visibility);
    this.visibilityChange.emit(this.visibility);
  }


}
