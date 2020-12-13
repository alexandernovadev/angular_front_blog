import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  page_title = 'Registrate';
  user: User;
  status = '';

  constructor(private _userService: UserService)
  {
    console.log(this.status);
    
    this.user = new User(1,'','','ROLE_USER','','','','');
  }

  enviarRegistro(form)
  {
    // console.log(this.user);
  
    this._userService.register(this.user).subscribe(
      response =>
      {
        // console.log("databack",response);
        this.status = 'success';
        form.reset(); 
      },
      error =>
      {
        //console.log("HYA UN ERROR" , error);
        let emailcheck = error.error.nameerror.email.length;
        if(emailcheck)
        {
        // console.log("El email ya existe");
        this.status = 'El email ya existe';
        } 
      }
    );

  }

  ngOnInit() {
  }

}
