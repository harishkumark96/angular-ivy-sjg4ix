import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { RendererDirective } from './renderer.directive';
import { SqurtPipe } from './squrt.pipe';
import { TemperaturePipe } from './temperature.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FirstDirectiveDirective,
    RendererDirective,
    SqurtPipe,
    TemperaturePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
