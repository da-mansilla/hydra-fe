import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteProgressBarComponent } from './expediente-progress-bar.component';

describe('ExpedienteProgressBarComponent', () => {
  let component: ExpedienteProgressBarComponent;
  let fixture: ComponentFixture<ExpedienteProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedienteProgressBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedienteProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
