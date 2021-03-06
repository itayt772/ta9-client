import { ModuleWithProviders, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";

import {
  FooterComponent,
  HeaderComponent,
  SharedModule,
  ClientsService,
  UtilsService
} from "./shared";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {
  useHash: true
});

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [BrowserModule, HomeModule, rootRouting, SharedModule],
  providers: [ClientsService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
