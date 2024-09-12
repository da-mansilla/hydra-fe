import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteNewComponent } from './expediente-new.component';

describe('ExpedienteNewComponent', () => {
  let component: ExpedienteNewComponent;
  let fixture: ComponentFixture<ExpedienteNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedienteNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedienteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
