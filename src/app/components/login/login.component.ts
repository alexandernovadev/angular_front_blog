import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  page_title = "Loggeate"
  user: User;
  status = '';
  token:string;
  identity: string;

  constructor(private _userService: UserService,
              private _router: Router,
              private _activateroute: ActivatedRoute)
  {
    this.user = new User(1,'','','ROLE_USER','','','','');
  }

  ngOnInit()
  {
    // Sse ejecuta cuando cargo este componente, y cierra sesion cuando 
    // le llega el parametro por la URL osea un 1
    this.logout();
  }
  
  enviarLogin(form)
  {
    this._userService.signup(this.user).subscribe(
      response => 
      {

        if(response.status == 'error')
        {
          this.status = 'Contraseña o Password Incorrectos';
          return
        }

        console.log("RSA",response);

        // Token
        this.status = 'success';
        this.token = response;

        this._userService.signup(this.user, true).subscribe(
          response => 
          {
            console.log("RSA",response);
            // User information
            this.identity = response;

            console.log("toke", this.token);
            console.log("User identidaD", this.identity);

            // PERSISTIR DATOS

            localStorage.setItem('token', this.token);
            localStorage.setItem('identity', JSON.stringify(this.identity));
            
            // Redireccion a INICIO
            this._router.navigate(['home']);

          },
            error =>
          {
            console.log("Error" , error);
            this.status = 'error';  
          }
        );
          
      },
        error =>
      {
        console.log("Error1" , error);
        this.status = 'error';  
      }
    );
  }

  logout()
  {
    this._activateroute.params.subscribe(dato=>{
      let logout = +dato['sure'];
      // Con el ma antes de dato lo convierto a int

      if(logout == 1)
      {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        // Redireccion a INICIO

        this._router.navigate(['home']);
      }
    })
  }

}
