import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailsComponent } from "./payment-details/payment-details"; // Nome exato da classe

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaymentDetailsComponent], 
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'PaymentApp';
}