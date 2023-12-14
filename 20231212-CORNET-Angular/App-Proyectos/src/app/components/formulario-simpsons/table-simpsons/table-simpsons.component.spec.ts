import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSimpsonsComponent } from './table-simpsons.component';

describe('TableSimpsonsComponent', () => {
  let component: TableSimpsonsComponent;
  let fixture: ComponentFixture<TableSimpsonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableSimpsonsComponent]
    });
    fixture = TestBed.createComponent(TableSimpsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
