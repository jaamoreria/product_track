import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { ProductService } from 'src/app/shared/services/product.service';
import { AppModule } from 'src/app/app.module';
import { of, throwError } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, AppModule],
      declarations: [ HomeComponent ],
      providers: [ProductService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a valid code response', () => {
    const result = of([{
      code: 'P9FK0U5V40'
    }] as any);

    const spyService = spyOn(productService, 'validateCodes').and.returnValue(result);
    component.searchCodesFormGroup.controls['codes'].setValue('P9FK0U5V40');
    component.searchCodeAction();
    expect(spyService).toHaveBeenCalled();
  });

  it('should catch all the server errors', () => {
    const spyService = spyOn(productService, 'validateCodes').and.returnValue(throwError(() => new Error('test')));
    component.searchCodesFormGroup.controls['codes'].setValue('P9FK0U5V40');
    component.searchCodeAction();
    expect(spyService).toHaveBeenCalled();
    expect(component.loadingCodes).toBeFalse();
  });
});
