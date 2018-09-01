import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ pageTitle }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <button mat-button color='primary' (click)='toggleImage()'>{{ showImage ? 'Hide' : 'Show' }} Image</button>
          <mat-form-field>
            <input matInput placeholder='Filter by' [(ngModel)]='listFilter'>
          </mat-form-field>

          <mat-list *ngIf='products && products.length'>
            <mat-list-item *ngFor='let product of filteredProducts'>
              <img *ngIf='showImage'
                  [src]='product.imageUrl'
                  [title]='product.productName'>
              <a [routerLink]="['/products', product.productId]">
                {{ product.productName }}
              </a>
              {{ product.productCode | lowercase | convertToSpaces:'-' }}
              {{ product.releaseDate }}
              {{ product.price | currency:'USD':'symbol':'1.2-2' }}
              <pm-star [rating]='product.starRating' (ratingClicked)='onRatingClicked($event)'></pm-star>
            </mat-list-item>
          </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: ['img { width: 50px; margin: 2px; }']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  displayedColumns: string[] = ['imageUrl', 'productName', 'productCode', 'releaseDate', 'productPrice', 'productStarRating'];
  filteredProducts: Product[];
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }

  constructor(private productService: ProductService) { }

  products: Product[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
