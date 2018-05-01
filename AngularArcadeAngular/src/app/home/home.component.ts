import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newPlayer: any;
  ioConnection: any;
  io;
  socketid: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { this.initToConnection(); }

  ngOnInit() {
    this.newPlayer = { name: '', socketid: this.socketid };
    // this._httpService.on("initial")

  }
  addNewPlayer() {
    console.log('in home component');
    // this.newPlayer.name = name //need this line to get name from the html
    const observable = this._httpService.addNewPlayer(this.newPlayer);
    observable.subscribe(data => {
      // console.log("123123123", data)
      this._router.navigate(['/arcade']);
      // return false;
    });
  }

  private initToConnection() {
    this._httpService.initSocket();

    this._httpService.onEvent('connect').subscribe(() => {
      console.log('You are connected!');
    });

    this._httpService.onEvent('other:connection').subscribe(() => {
      console.log('Somebody else connected!');
    });
    this.ioConnection = this._httpService.oninitial().subscribe((data) => {
      console.log(data);
      // this.socketid = data['socketid']
      this.newPlayer.socketid = data['socketid'];
      console.log(this.newPlayer);
    });
  }

}
