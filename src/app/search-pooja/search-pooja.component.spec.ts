import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPoojaComponent } from './search-pooja.component';

describe('SearchPoojaComponent', () => {
  let component: SearchPoojaComponent;
  let fixture: ComponentFixture<SearchPoojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPoojaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPoojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
