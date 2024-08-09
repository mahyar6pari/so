import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRelativesComponent } from './edit-relatives.component';

describe('EditRelativesComponent', () => {
  let component: EditRelativesComponent;
  let fixture: ComponentFixture<EditRelativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRelativesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRelativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
