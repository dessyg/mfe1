import {Component, Injector, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {createCustomElement} from "@angular/elements";
import {WebComponentsComponent} from "./web-components/web-components.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mfe1';

  constructor(private readonly injector: Injector) {
  }

  ngOnInit(): void {
    const webComponents = createCustomElement(WebComponentsComponent,{ injector: this.injector });
    customElements.define('web-components', webComponents);
  }

}


