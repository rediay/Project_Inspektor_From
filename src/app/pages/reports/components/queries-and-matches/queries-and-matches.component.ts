import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-queries-and-matches',
  templateUrl: './queries-and-matches.component.html',
  styleUrls: ['./queries-and-matches.component.scss']
})
export class QueriesAndMatchesComponent implements OnInit {

  constructor() { }
  thirdTypes = [{'id': 1, 'name': 'prueba 1'}, {'id': 2, 'name': 'prueba 2'}, {'id': 3, 'name': 'prueba 3'}];
  ngOnInit() {
  }

}
