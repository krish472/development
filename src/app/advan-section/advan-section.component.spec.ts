import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanSectionComponent } from './advan-section.component';

describe('AdvanSectionComponent', () => {
  let component: AdvanSectionComponent;
  let fixture: ComponentFixture<AdvanSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
