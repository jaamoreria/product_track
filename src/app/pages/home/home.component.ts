import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, take } from 'rxjs';
import { CodeValidationResponse } from 'src/app/shared/interfaces/code-validation-response';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchCodesFormGroup: FormGroup = new FormGroup({});
  
  loadingCodes = false;
  trackCodes: CodeValidationResponse[] = [];

  constructor(private router: Router,
    private fb: FormBuilder,
    private productService: ProductService,
    ) { 
      
    }

  get searchCode() {
    return this.searchCodesFormGroup.get('codes');
  }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Requests the codes inserted by the user.
   */
  searchCodeAction(): void {
    if (!this.searchCodesFormGroup.valid) {
      return;
    }
    
    this.trackCodes = [];
    const codes = this.searchCodesFormGroup.get('codes');

    if (codes && codes.value) {
      this.loadingCodes = true;
      let codeArray = codes.value.split(";");
      codeArray = codeArray?.filter((code: string) => code);
      this.productService.getValideCodes(codeArray).pipe(take(1)).subscribe((response: CodeValidationResponse[]) => {
        if (response) {
          this.trackCodes = response;
          this.loadingCodes = false;
        }
      }, (error) => {
        this.loadingCodes = false;
        console.log(error, 'error');
      });
    }
  }

  /**
   * Sends the user to product details page.
   * @param codeObject - The code info clicked by the user
   */
  goToCodeDetails(codeObject: CodeValidationResponse): void {
    this.productService.codeDetialsCache = codeObject;
    this.router.navigate(['/product-details']);
  }

  private createForm(): void {
    this.searchCodesFormGroup = this.fb.group({
      codes: ['', [Validators.required, Validators.maxLength(55)]]
    });
  }
}
