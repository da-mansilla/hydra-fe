import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitantesHomeComponent } from './solicitantes-home.component';

describe('SolicitantesHomeComponent', () => {
  let component: SolicitantesHomeComponent;
  let fixture: ComponentFixture<SolicitantesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitantesHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitantesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
