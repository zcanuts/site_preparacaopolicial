import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavLightComponent } from '../../components/nav-light/nav-light.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AgencyTabComponent } from '../../components/agency-tab/agency-tab.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { ClientComponent } from '../../components/client/client.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-index-two',
  standalone: true,
  imports: [CommonModule, NavLightComponent, ModalComponent,AboutComponent,ServicesComponent,AgencyTabComponent, CtaComponent,ClientComponent,PricingComponent,BlogsComponent,GetInTouchComponent],
  templateUrl: './index-two.component.html',
  styleUrl: './index-two.component.scss'
})
export class IndexTwoComponent {
  name = 'Angular';
  isActive: boolean = false

  openModal(value:any) {
    value.active = true
  }

  closeModal(value:any) {
    value.active = false
  }

}
