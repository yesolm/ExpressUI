import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-enrollqr',
  templateUrl: './enrollqr.component.html',
  styleUrls: ['./enrollqr.component.css']
})
export class EnrollqrComponent  implements OnInit {
  model: any = {};
  constructor(private route: ActivatedRoute, private patientService: PatientsService,private modal:ModalService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.model.sessionId = params['sessionId']; 
    });
  }
  register() {    
    this.patientService.register(this.model)
    .subscribe({
      complete: () => { this.modal.showSuccess("Registtration complete! Please wait until your name is called."); }, // completeHandler
      error: (e) => {
        switch(e.status) {
          case 401: this.modal.showError('Invalid session scan code again'); break;
          default : this.modal.showError('Unknown error occured');
        }
       },    // errorHandler 
      
  });
  }

}
