//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{message}}</h1>
  `,
})
export class App {
  message:string;
  constructor() {
    this.message = `Hello from Angular ${VERSION.full}`
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}
