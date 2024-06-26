import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../components/shared/navbar/navbar.component";
import { BannerComponent } from "../../components/main/home/banner/banner.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [CommonModule, RouterOutlet, FormsModule, NavbarComponent, BannerComponent, FooterComponent]
})
export class MainComponent {
}
