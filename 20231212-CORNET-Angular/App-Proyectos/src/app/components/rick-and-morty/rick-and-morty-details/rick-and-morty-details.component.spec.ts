import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyDetailsComponent } from './rick-and-morty-details.component';

describe('RickAndMortyDetailsComponent', () => {
  let component: RickAndMortyDetailsComponent;
  let fixture: ComponentFixture<RickAndMortyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickAndMortyDetailsComponent]
    });
    fixture = TestBed.createComponent(RickAndMortyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
