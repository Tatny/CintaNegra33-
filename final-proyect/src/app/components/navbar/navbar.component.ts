import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { DialogComponent } from "../dialog/dialog.component";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html', 
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor (public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogComponent);
}

}
