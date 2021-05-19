import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() list: string[];
  //boilerplate
  //@Output() variableName = new EventEmitter<type>();
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
