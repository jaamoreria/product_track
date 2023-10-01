import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { CodeAuthentication } from "../interfaces/code-authentication";
import { Product } from "../interfaces/product";
import { CodeValidationResponse } from "../interfaces/code-validation-response";
  
@Injectable({
    providedIn: 'root'
})
  
export class ProductService {
  codeDetialsCache: CodeValidationResponse = {};

  constructor(private http: HttpClient) { }

  getProductTrace(code: string): Observable<Product> {
    const url = `/api/compass-ws-rest/trace/${code}`;
    return this.http.get<Product>(url);
  }

  getValideCodes(codes: string[]): Observable<CodeValidationResponse[]> {
    const url = '/api/code-authentication/v2/batch';
    const body = {codes: codes} as CodeAuthentication;
    return this.http.post<CodeValidationResponse[]>(url, body);
  }
}