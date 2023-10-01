import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { CodeValidationResponse } from 'src/app/shared/interfaces/code-validation-response';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-deatils',
  templateUrl: './product-deatils.component.html',
  styleUrls: ['./product-deatils.component.scss']
})
export class ProductDeatilsComponent implements OnInit, OnDestroy {
  codeDetails: CodeValidationResponse = {};
  productDetails: Product = {};

  constructor(private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.codeDetails = this.productService.codeDetialsCache;

    if (!this.codeDetails || (Object.keys(this.codeDetails).length === 0)) {
      this.router.navigate(['/home']);
    }

    if (this.codeDetails.code) {
      this.productService.getProductTrace(this.codeDetails.code).pipe(take(1)).subscribe((response: Product) => {
        if (response) {
          console.log(response);
          response.events?.event.forEach(event => {
            event.location.mapLocation = `https://maps.google.com/maps?q=${event.location.coordinates.latitude},${event.location.coordinates.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
          });
          this.productDetails = response;
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.productService.codeDetialsCache = {};
  }
}
