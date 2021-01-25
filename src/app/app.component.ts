import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // name = "Angular " + VERSION.major;
  serverId = 10;
  serverStatus = "offline";
  allowNewServer = false;
  serverCreationStatus = "No server is created";
  serverName = "";
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateStatus() {
    this.serverCreationStatus = "Server is Created  Name is" + this.serverName;
  }
  onUpadteServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
