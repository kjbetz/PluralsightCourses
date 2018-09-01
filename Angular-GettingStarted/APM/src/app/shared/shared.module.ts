import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { StarComponent } from './star.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  exports: [
    ConvertToSpacesPipe,
    StarComponent,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
