import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "app/authentication.service";
import { User } from "app/user";

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loading = false;
  user:User = new User();

  constructor( private route: ActivatedRoute,
        private router: Router,private _authenticationService: AuthenticationService ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loggedInUser: User;
   returnUrl: string;

  submitted = false;

  login_error = false;

  onSubmit() { this.submitted = true; 

      this.loading = true;
      let user = null;

      console.log("Login:" + JSON.stringify(this.user) );
   
      this._authenticationService.login(this.user).subscribe(
                data => {
                    this.router.navigate(["employees"]);
                },
                error => {
                    //this.alertService.error(error);
                    this.login_error = false;
                });
    
  }

}
