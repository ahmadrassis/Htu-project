import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { sectors } from '../interface/sectors.interface';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  dbpath='/sectors';
  dbRef:AngularFireList<sectors>;

  constructor(
    private angularFiredatabase:AngularFireDatabase,
      ) {
    this.dbRef= angularFiredatabase.list(this.dbpath)
  }
  create(data:sectors){
    return this.dbRef.push(data);
    }
   update(key:string,data:sectors){
    return this.dbRef.update(key,data);
   }
   delete(key:string | undefined){
   return this.dbRef.remove(key);
   }

   getById(key:string){
    return this.angularFiredatabase
    .object(`${this.dbpath}/${key}`).valueChanges();
 }

   getAll(): Observable<any>{
    return  this.dbRef
    .snapshotChanges()
    .pipe(
        map((data)=>
          data.map((obj)=>({key:obj.payload.key , ...obj.payload.val()}))
       )
      )
    }

}
