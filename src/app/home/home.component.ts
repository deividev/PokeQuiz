import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  scoreList = [
    "99999",
    "71117",
    "82228",
    "64446",
    "17771"
  ]

  userIcon = faUser;
  constructor() { }

  ngOnInit(): void {
  }


}
