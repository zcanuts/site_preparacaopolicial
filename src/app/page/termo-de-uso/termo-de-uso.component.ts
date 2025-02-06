import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termo-de-uso',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './termo-de-uso.component.html',
  styleUrls: ['./termo-de-uso.component.scss']
})
export class TermoDeUsoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
