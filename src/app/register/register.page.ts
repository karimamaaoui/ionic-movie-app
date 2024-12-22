import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false
})
export class RegisterPage implements OnInit {


  ngOnInit() {
  }
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router,
    private alertController: AlertController  


  ) {}

  onRegister() {
  

    this.authService.register(this.email, this.password)
      .then(() => {
        console.log("register",this.email,this.password)

        this.router.navigate(['/login']);
      })
      .catch(async (error) => {
        this.errorMessage = error.message;
        console.log("error", error);

        const alert = await this.alertController.create({
          header: 'Registration Failed',
          message: 'Email already exist',  
          buttons: ['OK']
        });

        await alert.present();  
      });}
}
