import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { AgencyTabComponent } from '../../components/agency-tab/agency-tab.component';
import { ClientComponent } from '../../components/client/client.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-index-four',
  standalone: true,
  imports: [CommonModule, NavbarComponent, AboutComponent, ServicesComponent, CtaComponent, AgencyTabComponent, ClientComponent,PricingComponent, BlogsComponent, GetInTouchComponent],
  templateUrl: './index-four.component.html',
  styleUrl: './index-four.component.scss'
})
export class IndexFourComponent {
  companyLogo = ["assets/images/team/amazon.svg", "assets/images/team/google.svg","assets/images/team/lenovo.svg", "assets/images/team/paypal.svg", "assets/images/team/shopify.svg", "assets/images/team/spotify.svg"]
}
