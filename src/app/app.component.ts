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
  serverName = "Testserver";
  serverCreated = false;
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    // getColor(){
    //     this.serverStatus==='online'?'green':'red';
    // }
  }
  onCreateStatus() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server is Created  Name is" + this.serverName;
  }
  onUpadteServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
