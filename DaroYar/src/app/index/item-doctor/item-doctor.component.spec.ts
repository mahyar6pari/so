import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDoctorComponent } from './item-doctor.component';

describe('ItemDoctorComponent', () => {
  let component: ItemDoctorComponent;
  let fixture: ComponentFixture<ItemDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
