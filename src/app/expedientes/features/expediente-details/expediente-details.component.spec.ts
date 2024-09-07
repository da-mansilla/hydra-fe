import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteDetailsComponent } from './expediente-details.component';

describe('ExpedienteDetailsComponent', () => {
  let component: ExpedienteDetailsComponent;
  let fixture: ComponentFixture<ExpedienteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedienteDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedienteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
