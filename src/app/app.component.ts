import { Component, OnInit } from "@angular/core";

import { ClientsService } from "./shared";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsService.init();
  }
}
