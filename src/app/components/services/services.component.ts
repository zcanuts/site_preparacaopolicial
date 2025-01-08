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
      desc:'Estude com as melhores questões inéditas e extraídas de provas anteriores, selecionadas estrategicamente para garantir que você domine os conteúdos exigidos.'
    },
    {
      icon:'edit',
      title:'Prova personalizada',
      desc:'Crie suas próprias provas, adaptadas ao seu ritmo e às suas necessidades. Foque no que realmente importa para você e otimize seus estudos de forma prática e eficaz de forma estratégica.'
    },
    {
      icon:'file-text',
      title:'Simulados',
      desc:'Prepare-se como se estivesse no dia do exame! Nossos simulados são desenvolvidos para simular a experiência real da prova, ajudando você a ganhar confiança e identificar pontos de melhoria.'
    },
    {
      icon:'book-open',
      title:'Noticias Policiais',
      desc:'Fique por dentro dos concursos que estão pra serem publicados. Informações atualizadas e relevantes que podem fazer a diferença na sua preparação. Aqui você fica bem informado.'
    },
    {
      icon:'crosshair',
      title:'Conteúdo de Elite',
      desc:'Aprenda com conteúdos objetivos, desenvolvidos estrategicamente, com resumos, esquemas e técnicas que facilitam a fixação dos temas mais complexos.'
    },
    {
      icon:'message-square',
      title:'Se Liga',
      desc:'Mantenha-se inspirado e focado com técnicas de estudo inteligentes e mensagens motivacionais. Nossa missão é fazer você acreditar no seu potencial!'
    },
    {
      icon:'trending-up',
      title:'Desempenho',
      desc:'Descubra onde você está indo bem e onde precisa melhorar. Relatórios detalhados ajudam você a construir uma estratégia de estudo vencedora.'
    },
    {
      icon:'phone-call',
      title:'Suporte',
      desc:'Aqui você pode contar com uma equipe em resolver problemas relacionados à plataforma. Estamos aqui para garantir que você tenha uma excelente experiência!'
    },
  ]

}
