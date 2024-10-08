import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { PanelComponent } from "./panel/panel.component";
import { ToastComponent } from './@shared/service/toast/toast.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, HomeComponent, NavbarComponent, PanelComponent,ToastComponent]
})
export class AppComponent {
  title = 'finalProject';
}
