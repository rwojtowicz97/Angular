import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail;
  //  = {
  //   CVV: null,
  //   CardNumber: null,
  //   CardOwnerName: null,
  //   ExpirationDate: null,
  //   PMId: null
  // }
  readonly rootURL = 'http://localhost:65379/api';

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail){
    return this.http.post(this.rootURL + '/PaymentDetail', formData);

  }
}
