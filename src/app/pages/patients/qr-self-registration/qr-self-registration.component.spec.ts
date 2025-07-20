import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrSelfRegistrationComponent } from './qr-self-registration.component';

describe('QrSelfRegistrationComponent', () => {
  let component: QrSelfRegistrationComponent;
  let fixture: ComponentFixture<QrSelfRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrSelfRegistrationComponent]
    });
    fixture = TestBed.createComponent(QrSelfRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
