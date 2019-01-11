import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  personName: string;
  constructor(private toastController: ToastController) {}
  async showGreeting(name: string) {
    const toast = await this.toastController.create({
      message: `Hello ${this.personName}`,
      duration: 3000
    });
    toast.present();
  }

}
