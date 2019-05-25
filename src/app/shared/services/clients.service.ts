import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Client } from "../models";

import { environment } from "../../../environments/environment";
import { UtilsService } from "./utils.service";

declare var $: any;

@Injectable()
export class ClientsService {
  private clientsSubject = new BehaviorSubject<Array<Client>>(
    new Array<Client>()
  );
  public clients = this.clientsSubject.asObservable();

  private connection: any;
  private proxy: any;

  constructor(private utilsService: UtilsService) {}

  // this runs once on application startup.
  public init(): void {
    this.initializeSignalRConnection();
  }

  private initializeSignalRConnection(): void {
    // get from configs, also remove to signalrService
    let signalRServerEndPoint = environment.signalRServerEndPoint;
    this.connection = $.hubConnection(signalRServerEndPoint);
    this.proxy = this.connection.createHubProxy("clientDetails");

    this.proxy.on("notifyClients", (data: Array<Client>) => {
      this.clientsSubject.next(data);
    });

    this.connection
      .start({ withCredentials: false })
      .done((data: any) => {
        console.log("Connected to Hub");
        this.subsriceClient();
      })
      .catch((error: any) => {
        console.log("Notification Hub error -> " + error);
      });
  }

  private subsriceClient(): void {
    this.proxy
      .invoke("SubsriceClient", { Ip: this.utilsService.generateIp() })
      .catch((error: any) => {
        console.error("subsrice error", error);
      });
  }
}
