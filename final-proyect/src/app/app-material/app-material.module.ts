import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, 
  MatMenuModule, 
  MatCardModule, 
  MatInputModule,
  MatDialogModule,
  MatFormFieldModule, 
  MatSelectModule
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
    MatSelectModule
],
 

  exports:[
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
    

})
export class AppMaterialModule { }
