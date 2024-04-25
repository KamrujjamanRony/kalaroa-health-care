import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html'
})
export class BannerComponent {
  bannerBg: any = '../../../assets/banner-pattern.svg';
  mobile: any = '../../../assets/mobile_app.png'; 

}
