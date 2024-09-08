import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteStatusComponent } from './expediente-status.component';

describe('ExpedienteStatusComponent', () => {
  let component: ExpedienteStatusComponent;
  let fixture: ComponentFixture<ExpedienteStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedienteStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedienteStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
