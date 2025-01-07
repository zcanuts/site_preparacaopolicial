import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AgencyTabComponent } from '../../components/agency-tab/agency-tab.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { ClientComponent } from '../../components/client/client.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';
import { IconsModule } from '../../icons/icons.module';

@Component({
  selector: 'app-index-three',
  standalone: true,
  imports: [CommonModule, NavbarComponent,ModalComponent, AboutComponent,ServicesComponent, AgencyTabComponent,CtaComponent,ClientComponent,PricingComponent, BlogsComponent,GetInTouchComponent, CountUpModule, IconsModule],
  templateUrl: './index-three.component.html',
  styleUrl: './index-three.component.scss'
})
export class IndexThreeComponent {

  name = 'Angular';
  isActive: boolean = false

  openModal(value:any) {
    value.active = true
  }

  closeModal(value:any) {
    value.active = false
  }

}
