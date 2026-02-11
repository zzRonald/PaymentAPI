import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailForm } from "./payment-details/payment-detail-form/payment-detail-form";
import { PaymentDetails } from "./payment-details/payment-details";

@Component({
  selector: 'app-root',
  imports: [PaymentDetails],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('PaymentApp');
}
