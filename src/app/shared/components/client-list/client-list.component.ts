import { Component, OnInit, Input } from "@angular/core";
import { Client } from "../../models";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"]
})
export class ClientListComponent implements OnInit {
  constructor() {}
  @Input() clients: Array<Client>;
  ngOnInit() {}

  trackByFn(index, client: Client) {
    return client.ClientDetails.Ip;
  }
}
