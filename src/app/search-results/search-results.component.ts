import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
