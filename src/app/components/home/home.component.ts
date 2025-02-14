import { Component, ComponentFactoryResolver } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { ListComponent } from '../list/list.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('dropdownContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  dropdownRef: ComponentRef<ListComponent>;

  constructor(private resolver:ComponentFactoryResolver) {}

  toggleDropdown() {
    if (this.dropdownRef) {
      this.dropdownRef.destroy();
      this.dropdownRef = null;
    } else {
      const factory = this.resolver.resolveComponentFactory(ListComponent);
      this.dropdownRef = this.container.createComponent(factory);
    }
  }
}




