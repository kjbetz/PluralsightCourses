import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <mat-toolbar color='primary'>
      <span>Acme Product Management</span>
      <a mat-button [routerLink]="['/welcome']">Home</a><br>
      <a mat-button [routerLink]="['/products']">Product List</a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
