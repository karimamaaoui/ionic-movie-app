import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController  
  ) {}

  onLogin() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/dashboard-movie']);
      })
      .catch(async (error) => {
        this.errorMessage = error.message;
        console.log("error", error);

        const alert = await this.alertController.create({
          header: 'Login Failed',
          message: 'Email or password was wrong ',  
          buttons: ['OK']
        });

        await alert.present();  
      });}
  

  ngOnInit() {
  }

}
