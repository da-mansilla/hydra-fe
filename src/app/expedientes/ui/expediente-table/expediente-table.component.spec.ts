import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteTableComponent } from './expediente-table.component';

describe('ExpedienteTableComponent', () => {
  let component: ExpedienteTableComponent;
  let fixture: ComponentFixture<ExpedienteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedienteTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedienteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
