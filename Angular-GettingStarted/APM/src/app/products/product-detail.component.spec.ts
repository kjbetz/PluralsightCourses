import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ProductDetailComponent, ProductDetailGuard } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('ProductDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailGuard]
    });
  });

  it('should ...', inject([ProductDetailGuard], (guard: ProductDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
