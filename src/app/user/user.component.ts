import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userList: any[]=[]
  addUserForm!: FormGroup;


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
  deleteItem(userId:number) {
    this.userService.deleteUser(userId).subscribe(data=>{
      let response:any = data
      
      console.log(response) })
  }
  onSubmit() {
    if (this.addUserForm.invalid) {
      return;
    }
    const formData = this.addUserForm.value;
  this.userService.addUser(formData).subscribe((data) => {
    // Ekleme işlemi tamamlandıktan sonra yapılacak işlemler
    console.log('User added successfully.');
    // Örneğin, kullanıcıları yeniden yükleme işlemi yapılabilir
    this.loadUsers();
  });
  }
}
