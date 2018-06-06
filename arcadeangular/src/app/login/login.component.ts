import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newPlayer: any;
  socketid: any;
  ioConnection: any;
  io;
  error: string;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { this.initToConnection(); }

  ngOnInit() {
    this.newPlayer = { name: '', socketid: this.socketid };
  }

  addNewPlayer() {
    console.log('in home component');

    // this.newPlayer.name = name //need this line to get name from the html
    const observable = this._httpService.addNewPlayer(this.newPlayer);
    observable.subscribe(data => {
    if ((data as any).message === 'Success') {
      this._router.navigate(['/arcade']);
    } else {
      this.error = 'Name must be at least 3 characters';
    }
    console.log('added: ', this.newPlayer);
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


    // this._httpService.onEvent('initial').subscribe(()=> {
    //   console.log("a new instance was made")

    // });
    this.ioConnection = this._httpService.whenInit().subscribe((data) => {
      console.log(data);
      // this.socketid = data['socketid']
      this.newPlayer.socketid = data['socketid'];
      console.log(this.newPlayer);
    });

    // this._httpService.onEvent('disconnect').subscribe(() => {
    //   console.log('Somebody disconnected!');
    //   this._httpService.send({message: "a socket has disconnected"})
    // });
  }

}
