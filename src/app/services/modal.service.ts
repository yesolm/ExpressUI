import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
const toast =  Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Injectable({
  providedIn: 'root'
})


export class ModalService {

  constructor() { }

  showSuccess(message:string){ toast.fire({ icon: 'success', text: message }); }  
  showError(message:string){ toast.fire({ icon: 'error', text: message }); }  
  showConfirm(confirmText: String,
    confirmCallback: () => void,
    cancelCallback: () => void){  
      Swal.fire({  
          title: 'Are you sure want to remove?',  
          text: 'You will not be able to recover this file!',  
          icon: 'warning',  
          showCancelButton: true,  
          confirmButtonText: 'Yes, delete it!',  
          cancelButtonText: 'No, keep it'  
        }).then((result:any) => {  
          if (result.value) {  
            confirmCallback();

            // Swal.fire(  
            //   'Deleted!',  
            //   'Your imaginary file has been deleted.',  
            //   'success'  
            // )  
          } else if (result.dismiss === Swal.DismissReason.cancel) {  
            cancelCallback();
            // Swal.fire(  
            //   'Cancelled',  
            //   'Your imaginary file is safe :)',  
            //   'error'  
            // )  
          }  
        })  
}
}
