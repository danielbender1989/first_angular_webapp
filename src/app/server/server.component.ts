import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class ServerComponent {
  serverId = 10;
  buttonActive = false;
  serverStatus = 'offline';
  test = Date.now().toString();
  @Output() clickEvent = new EventEmitter();

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onClick() {
    this.buttonActive ? this.buttonActive = false : this.buttonActive = true;
    this.clickEvent.emit(Date.now());
  }

}
