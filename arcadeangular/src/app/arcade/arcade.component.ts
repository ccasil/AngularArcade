import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.css']
})
export class ArcadeComponent implements OnInit {

  player: any;
  io;
  ioConnection: any;
  sktid: any;
  listenbroadcast: any;

  messages = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { this.initToConnection(); }

  ngOnInit() {
    this.player = this._httpService.player;
    this.sktid = this._httpService.socketid;
  }

  public addNewMessage() {
    console.log('in arcade component');
  }

  private initToConnection() {
    // this._httpService.initSocket();
    this.ioConnection = this._httpService.onMessage().subscribe((message) => {
      this.messages.push(message);
    });

    this._httpService.onEvent('connect').subscribe(() => {
      console.log('You are connected!');
    });

    this._httpService.onEvent('other:connection').subscribe((data) => {
      console.log('Somebody else connected!');
      console.log(data);
    });

    this._httpService.onEvent('disconnect').subscribe(() => {
      console.log('Somebody disconnected!');
    });
  }
}
