import { Component } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
