import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSimpsonsComponent } from './formulario-simpsons.component';

describe('FormularioSimpsonsComponent', () => {
  let component: FormularioSimpsonsComponent;
  let fixture: ComponentFixture<FormularioSimpsonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioSimpsonsComponent]
    });
    fixture = TestBed.createComponent(FormularioSimpsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
