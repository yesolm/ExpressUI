import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollqrComponent } from './enrollqr.component';

describe('EnrollqrComponent', () => {
  let component: EnrollqrComponent;
  let fixture: ComponentFixture<EnrollqrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollqrComponent]
    });
    fixture = TestBed.createComponent(EnrollqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
