import { Injectable } from '@angular/core';
import { Notify, Confirm } from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  showSuccess(message: string) { Notify.success(message); }  
  showError(message: string) { Notify.failure(message); }  

  showConfirm(
    confirmText: string,
    confirmCallback: () => void,
    cancelCallback: () => void
  ) {  
    Confirm.show(
      'Confirmation',
      confirmText,
      'Yes',
      'No',
      () => {
        confirmCallback();
      },
      () => {
        cancelCallback();
      },
      {},
    );
  }
}