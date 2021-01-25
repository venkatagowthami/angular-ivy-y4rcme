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
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
