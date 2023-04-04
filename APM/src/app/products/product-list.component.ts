import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css',]
})

export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imgWidth: number = 54;
  imgMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[] = []
  products: IProduct[] = [];
  private _listFilter: string = "saw";

  constructor(private productService: ProductService) {}

  // Getters and Setters
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  
  // perform component initilization
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  // Methods
  toggleImages(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
  
  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }
}