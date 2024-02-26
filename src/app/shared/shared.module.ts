// shared.module.ts
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
