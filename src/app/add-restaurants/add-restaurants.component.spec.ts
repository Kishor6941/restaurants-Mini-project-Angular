import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurantsComponent } from './add-restaurants.component';

describe('AddRestaurantsComponent', () => {
  let component: AddRestaurantsComponent;
  let fixture: ComponentFixture<AddRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
