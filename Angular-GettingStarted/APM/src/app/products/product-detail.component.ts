import { Component, OnInit, Injectable } from '@angular/core';
import { Product } from './product';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      alert("Invalid product Id");
      this.router.navigate(['/products']);
      return false;
    };
    return true;
  }
}


@Component({
  template: `
    <mat-card *ngIf='product'>
      <mat-card-header>
        {{ pageTitle + ': ' + product.productName }}
      </mat-card-header>
      <mat-card-content>
        {{ product.productId }}
        {{ product.productCode }}
        {{ product.description }}
        {{ product.releaseDate }}
        {{ product.price }}
        <pm-star></pm-star>
        <img [src]='product.imageUrl'>
      </mat-card-content>
      <mat-card-footer>
        <a mat-button (click)='onBack()'>Back</a>
      </mat-card-footer>
    </mat-card>
  `,
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(private route: ActivatedRoute,  private router: Router, private productService: ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(
      product => {
        this.product = product;
      },
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
