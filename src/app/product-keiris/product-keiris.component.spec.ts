import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductKeirisComponent } from './product-keiris.component';

describe('ProductKeirisComponent', () => {
  let component: ProductKeirisComponent;
  let fixture: ComponentFixture<ProductKeirisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductKeirisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductKeirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
