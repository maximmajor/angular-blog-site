import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

constructor(private subService: SubscribersService){

}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(formVal: any){

    const subDate: Sub = {
        name: formVal.name,
        email: formVal.email
    }
    this.subService.addSubs(subDate)



}

}
