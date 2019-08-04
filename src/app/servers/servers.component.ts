import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']
  orderingNr = 'white';
  buttonLogs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  clickEvent($event) {
    this.buttonLogs.push($event);
  }

  getBackgroundColor(i) {
    return i > 3 ? 'blue' : 'white';
  }

}

