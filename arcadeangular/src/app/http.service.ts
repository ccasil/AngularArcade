import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import * as io from 'socket.io-client';
const SERVER_URL = 'http://localhost:8000';

@Injectable()
export class HttpService {

  private socket;
  player: any;
  socketid: any;

  constructor(private _http: HttpClient) { }

  addNewPlayer(player) {
    return this._http.post('/player', player);
  }

  addNewMessage(message) {
    return this._http.post('/message', message);
  }

  broadcast() {
    // console.log(message)
    this.socket.emit('broadcasting');
  }

  onBroadcast() {
    return new Observable<object>(observer => {
      this.socket.on('broadcast', (data) => {
        observer.next(data);
        console.log('in broadcast service', data);
      });
    });
  }

  clear() {
    this.socket.emit('clear');
  }

  initSocket() {
    this.socket = io(SERVER_URL);
  }

  send(message) {
    this.socket.emit('message', message);
  }

  onMessage() {
    return new Observable<object>(observer => {
      this.socket.on('message', (data) => observer.next(data));
    });
  }

  onUpdate() {
    return new Observable<object>(observer => {
      this.socket.on('update', (data) => observer.next(data));
    });
  }

  onEvent(event) {
    return new Observable<object>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

  whenInit() {
    return new Observable<object>(observer => {
      this.socket.on('init', (data) => {
        observer.next(data);
        this.socketid = data['socketid'];
      });
    });
  }

}
