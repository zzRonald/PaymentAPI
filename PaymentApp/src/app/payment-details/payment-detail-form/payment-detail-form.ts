import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetailService } from '../../shared/payment-detail'; 
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './payment-detail-form.html',
  styles: ``
})
export class PaymentDetailForm {

  constructor(
    public service: PaymentDetailService, 
    private toastr: ToastrService) { } 

  onSubmit(form: NgForm) {
    this.service.postPaymentDetail().subscribe({
      next: (res: any) => {
        this.service.list = res as PaymentDetail[];
        this.service.resetForm(form);
        this.toastr.success('Inserido com sucesso!', 'Cadastro');
      },
      error: (err: any) => { console.log(err); }
    });
  }
}