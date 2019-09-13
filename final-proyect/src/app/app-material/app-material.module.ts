import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, 
  MatMenuModule, 
  MatCardModule, 
  MatInputModule,
  MatDialogModule,
  MatFormFieldModule, 
  MatSelectModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule
],
 

  exports:[
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule
  ],
    

})
export class AppMaterialModule { }
