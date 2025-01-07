import { CommonModule } from '@angular/common';
import { Component,  CUSTOM_ELEMENTS_SCHEMA,  ElementRef, ViewChild  } from '@angular/core';
import { NavLightComponent } from '../../components/nav-light/nav-light.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AgencyTabComponent } from '../../components/agency-tab/agency-tab.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { ClientComponent } from '../../components/client/client.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';

import { register } from 'swiper/element/bundle';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

import { Pagination, Autoplay } from 'swiper/modules'

@Component({
  selector: 'app-index-seven',
  standalone: true,
  imports: [CommonModule, NavLightComponent, AboutComponent, ServicesComponent, AgencyTabComponent, CtaComponent,ClientComponent, PricingComponent, BlogsComponent,GetInTouchComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './index-seven.component.html',
  styleUrl: './index-seven.component.scss'
})
export class IndexSevenComponent {
  constructor() {
    register()
  }
  activeindex:number = 1

  formTab(index:number) {
   this.activeindex = index
  }

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;
  



  index = 0;

  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
    autoplay: {
      delay: 3000,
      },
    loop: true,
    speed:1000,
    
  }

  swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 3000,
      }
  }
  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
    
  }
}
