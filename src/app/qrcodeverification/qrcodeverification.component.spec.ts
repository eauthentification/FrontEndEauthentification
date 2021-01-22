import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeverificationComponent } from './qrcodeverification.component';

describe('QrcodeverificationComponent', () => {
  let component: QrcodeverificationComponent;
  let fixture: ComponentFixture<QrcodeverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeverificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
