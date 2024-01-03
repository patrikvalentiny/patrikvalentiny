import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{
  private readonly storage = window.localStorage;
  isChecked = new FormControl(false);

  constructor() {
    this.isChecked.setValue(this.storage.getItem('darkMode') === 'true');
  }
  checkBoxClicked() {
    this.storage.setItem('darkMode', this.isChecked.value ? 'true' : 'false');
  }

}
