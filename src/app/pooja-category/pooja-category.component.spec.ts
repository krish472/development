import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaCategoryComponent } from './pooja-category.component';

describe('PoojaCategoryComponent', () => {
  let component: PoojaCategoryComponent;
  let fixture: ComponentFixture<PoojaCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoojaCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoojaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
