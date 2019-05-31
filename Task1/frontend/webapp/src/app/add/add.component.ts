import { Component, OnInit } from '@angular/core';
import {userdata} from '../userdata';
import { UserService } from '../user.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private user:UserService) { }
  udata=new userdata();
  ngOnInit() {
    
  }
  submit(form){
    this.user.poststud(this.udata).subscribe(data=>console.log(data));
    form.reset();
  }
              
}
