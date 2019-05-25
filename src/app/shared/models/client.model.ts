import { ClientDetails } from "./client-details.model";
import { Connection } from "./connection.model";

export class Client {
  Connected: boolean;
  ClientDetails: ClientDetails;
  Connections: Array<Connection> = [];
}
