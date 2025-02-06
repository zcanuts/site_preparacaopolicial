import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {

  showBanner: boolean = true;

  constructor(private cookieService: CookieService) {
    this.showBanner = !this.cookieService.checkCookie('cookieAccepted');
  }

  acceptCookies(): void {
    this.cookieService.setCookie('cookieAccepted', 'true', 365);
    this.showBanner = false;
  }

}
