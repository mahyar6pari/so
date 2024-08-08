import { Component, inject } from '@angular/core';
import { ToastService } from '../../@shared/service/toast/toast.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  toastService=inject(ToastService)
}
