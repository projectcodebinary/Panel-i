import { Component, OnInit } from '@angular/core';
import {userdata} from '../userdata';
import { UserService } from '../user.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private user:UserService) { }
  public udata:{};

  ngOnInit() {
    this.user.getstud().subscribe(data=>this.udata=data);
    console.log(this.udata);
  }

}
