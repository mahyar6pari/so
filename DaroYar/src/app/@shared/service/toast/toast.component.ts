import { ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { ToastService } from './toast.service';
import { CommonModule } from '@angular/common';
import { NgbToastModule } from '@deliverysolutions/ng-bootstrap';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule,NgbToastModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  constructor(public toastService: ToastService, private chRef: ChangeDetectorRef) {
    let that = this;
    setInterval(() => {
      if (that.toastService.toasts.length > 0) {
        console.log('called');
        that.chRef.detectChanges();
      }
    }, 1000);
  }

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
