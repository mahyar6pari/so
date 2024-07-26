import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDrugComponent } from './item-drug.component';

describe('ItemDrugComponent', () => {
  let component: ItemDrugComponent;
  let fixture: ComponentFixture<ItemDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDrugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
