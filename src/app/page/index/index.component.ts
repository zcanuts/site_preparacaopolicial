import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AgencyTabComponent } from '../../components/agency-tab/agency-tab.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { ClientComponent } from '../../components/client/client.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NavbarComponent, AboutComponent,ServicesComponent,AgencyTabComponent, CtaComponent,ClientComponent, PricingComponent, BlogsComponent,GetInTouchComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
      
}
