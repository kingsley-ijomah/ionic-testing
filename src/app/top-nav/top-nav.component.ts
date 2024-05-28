import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.open('first');
  }
}