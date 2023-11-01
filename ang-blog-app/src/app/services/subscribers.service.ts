import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore) { }

  addSubs(subData: any){
    this.afs.collection('subscribers').add(subData).then(() => {
console.log('subscribers added successfully')
    })

  }

  checkSubs(subEmail: any){
    return this.afs.collection('subscribers', ref => ref.where('email', '==', subEmail)).get()
  }
}
