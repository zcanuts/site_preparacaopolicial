import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavLightComponent } from '../../components/nav-light/nav-light.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-politica-privacidade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './politica-privacidade.component.html',
  styleUrls: ['./politica-privacidade.component.scss'],
})
export class PoliticaPrivacidadeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
