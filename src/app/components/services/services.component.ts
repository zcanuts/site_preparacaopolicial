import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,IconsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements
  OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
  }

  serviceData = [
    {
      icon:'check-square',
      title:'Questões',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
      icon:'edit',
      title:'Prova personalizada',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
      icon:'file-text',
      title:'Simulados',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
      icon:'book-open',
      title:'Noticias Policiais',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
      icon:'crosshair',
      title:'Conteúdo de Elite',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
      icon:'message-square',
      title:'Se Liga',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
      icon:'trending-up',
      title:'Desempenho',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
    {
      icon:'phone-call',
      title:'Suporte',
      desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    },
  ]

}
