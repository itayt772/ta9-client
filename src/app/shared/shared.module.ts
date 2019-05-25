import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ClientListComponent } from "./components/client-list/client-list.component";

@NgModule({
  declarations: [ClientListComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [CommonModule, HttpClientModule, RouterModule, ClientListComponent]
})
export class SharedModule {}
