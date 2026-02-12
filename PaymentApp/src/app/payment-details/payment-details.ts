import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDetailService } from '../shared/payment-detail'; 
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailForm } from './payment-detail-form/payment-detail-form'; 

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [CommonModule, PaymentDetailForm],
  templateUrl: './payment-details.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  
  onDelete(id: number) {
    if (confirm('Tem certeza que deseja deletar?')) {
      this.service.deletePaymentDetail(id).subscribe({
        next: (res: any) => {
          this.service.list = res as PaymentDetail[];
          this.toastr.error('Deletado com sucesso', 'Pagamento');
        },
        error: (err: any) => { console.log(err); }
      });
    }
  }
}