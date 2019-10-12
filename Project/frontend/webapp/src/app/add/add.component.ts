import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
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
  showMsg:boolean=false;
  convert:boolean;
  company_name=['CodeBinary Initiatives','Wipro','Infosys'];
  selected_msg:string="";
  ngOnInit() {}
  submit(form)  
  {
    this.user.poststud(this.udata).subscribe(data=>console.log(data));
    alert(this.udata.name+" Your data has been saved successfully");
    setTimeout(function(){ form.resetForm();   }, 3000);
     return xepOnline.Formatter.Format('content',{render:'download'}); 
    
  } 
    
}
