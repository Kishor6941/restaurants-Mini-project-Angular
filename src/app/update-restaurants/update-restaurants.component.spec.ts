import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurantsComponent } from './update-restaurants.component';

describe('UpdateRestaurantsComponent', () => {
  let component: UpdateRestaurantsComponent;
  let fixture: ComponentFixture<UpdateRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
