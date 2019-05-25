import { Component, OnInit, NgZone } from "@angular/core";
import { ClientsService, Client } from "../shared";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  clients: Array<Client> = [];

  constructor(private clientsService: ClientsService, private zone: NgZone) {}

  ngOnInit() {
    this.clientsService.clients.subscribe(data => {
      this.zone.run(() => {
        this.clients = data.reverse();
      });
    });
  }
}
