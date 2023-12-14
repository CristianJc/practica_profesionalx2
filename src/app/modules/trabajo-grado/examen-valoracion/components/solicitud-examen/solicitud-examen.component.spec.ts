import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudExamenComponent } from './solicitud-examen.component';

describe('SolicitudExamenComponent', () => {
  let component: SolicitudExamenComponent;
  let fixture: ComponentFixture<SolicitudExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
