import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductDeatilsComponent } from './product-deatils.component';

describe('ProductDeatilsComponent', () => {
  let component: ProductDeatilsComponent;
  let fixture: ComponentFixture<ProductDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ProductDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
