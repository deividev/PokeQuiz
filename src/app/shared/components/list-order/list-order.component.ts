import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  @Input() scoreList: string[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.scoreList);
    this.scoreList.sort(function(a, b){
      return parseInt(b) - parseInt(a);
    });
  }

}
