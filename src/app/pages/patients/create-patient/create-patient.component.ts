import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit,AfterViewInit {
  @ViewChild('patientStepper', {static: false})
  private stepperEl!: ElementRef;
  private stepper!: Stepper;
  isValidated!: boolean;

  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    this.stepper = new Stepper(this.stepperEl.nativeElement, {
      linear: false,
      animation: true  
    })    
  }

  next() { this.stepper.next();  }
  previous() { this.stepper.previous();  }
  onSubmit(){ return false; }

}
