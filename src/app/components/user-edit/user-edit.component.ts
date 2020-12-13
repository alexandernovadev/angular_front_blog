import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { urlglobal } from '../../services/apiglobal'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit 
{

  page_title = 'Ajustes de Usuario'
  user: User;
  identity;
  token;
  status = '';
  urlapi = urlglobal.url;

  loading = true;

  opcionesfroala: Object = {
    language: 'es',
    toolbarButtons: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'paragraphFormat', 'superscript', 
        'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle',
         'clearFormatting']
      }
    }
  };

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gig, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: this.urlapi + 'user/upload',
      headers: {
      "Authorization" : this._userService.getToken()
      }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube Tu Avatar de usuario',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };


  constructor(private _userService: UserService)
  {
    // this.user = new User(1,'','','ROLE_USER','','','','');

    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();

    this.user = new User(
      this.identity.userall.id,
      this.identity.userall.name,
      this.identity.userall.surname,      
      this.identity.userall.role,      
      this.identity.userall.email, 
      '',      
      this.identity.userall.description,      
      this.identity.userall.image,      
    );

    console.log(this.identity.userall);
    

  }

  ngOnInit() 
  {

  }

  enviarUpdateUser(form)
  {
    this._userService.updateuser(this.token, this.user).subscribe(
    response =>{
      this.status = "success"
      console.log("WELL Update user", response);

      if(response.status == 'success')
      {
        this.identity.userall = this.user;
        this.identity.name = this.user.name;
        this.identity.surname = this.user.surname;
        this.identity.email = this.user.email;
        console.log(this.identity.userall);
        console.log("toke",this.identity);
        
        localStorage.setItem('identity', JSON.stringify(this.identity));
      }
    },
    error => 
    {
      console.log("Error Update user", error); 
      this.status = "Hya un error en algun lado ajjaja arregls"
    }
    );
  }

  ImagenUpload(datos)
  {
     //console.log("IMAGEN RTA", JSON.parse( datos.response));
     let data = JSON.parse( datos.response);
     this.user.image = data.imagename;
  }
}
