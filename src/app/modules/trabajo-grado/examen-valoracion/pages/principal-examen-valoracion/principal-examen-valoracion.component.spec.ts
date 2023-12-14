import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalExamenValoracionComponent } from './principal-examen-valoracion.component';

describe('PrincipalExamenValoracionComponent', () => {
  let component: PrincipalExamenValoracionComponent;
  let fixture: ComponentFixture<PrincipalExamenValoracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalExamenValoracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalExamenValoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
