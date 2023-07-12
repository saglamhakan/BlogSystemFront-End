import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userList: any[]=[]
  constructor(
    private userService: UserServiceService
  ){

  }
  ngOnInit(){
    this.loadUsers()
  }
  loadUsers(){
    this.userService.getAllUsers().subscribe(data=>{
      let response:any = data
      this.userList=response.getAllUsersDto
      console.log(response)
    
    })
  }
}
