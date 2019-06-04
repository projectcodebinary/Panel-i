import { Component, OnInit } from '@angular/core';
import {userdata} from '../userdata';
import { UserService } from '../user.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  msg:string="";
  constructor(private user:UserService) { }
  udata=new userdata();
  
  ngOnInit() {
    
  }
  submit(form){
    this.user.poststud(this.udata).subscribe(data=>console.log(data));
    alert(this.udata.name+' Your data has been successfully saved!! \n\n' );
    form.resetForm();
  }
              
}
