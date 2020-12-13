import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  page_title = 'Pagina No Encontrada'

  constructor() { }

  ngOnInit() {
  }

}
