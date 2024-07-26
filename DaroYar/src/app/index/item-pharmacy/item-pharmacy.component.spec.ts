import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPharmacyComponent } from './item-pharmacy.component';

describe('ItemPharmacyComponent', () => {
  let component: ItemPharmacyComponent;
  let fixture: ComponentFixture<ItemPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPharmacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
