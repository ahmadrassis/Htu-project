import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { UserCredential } from '@firebase/auth-types';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  dbpath = '/users';
  dbRef: AngularFireList<any>;
  userInfo = new BehaviorSubject<any>({});
  userId: string = '';
  isLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('UserId'));
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireDatabase: AngularFireDatabase,
    private router: Router
  ) {
    this.dbRef = angularFireDatabase.list(this.dbpath);
    this.authStateUbscripe();
  }
  get isLoggedIn() {
    return this.isLoggedIn$.getValue();
  }
  login( email: string, password: string): Observable<any> {
    return from(
      this.angularFireAuth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
          window.alert(error.message());
        })
    );
  }
  signup(email: string, password: string): Observable<UserCredential> {
    return from(
      this.angularFireAuth.createUserWithEmailAndPassword(email, password)
    );
  }
  createUser(userId: string, name: string, email: string): Observable<any> {
    this.userId = userId;
    return from(
      this.dbRef.update(userId, {
        userId: userId,
        name: name,
        email: email,
        role: 'enduser',
      })
    );
  }
  authStateUbscripe() {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        if (!this.isLoggedIn) {
          this.router.navigate(['/startup/all-startup']);
        }
        this.getUserById(user.uid);
        this.userId = user.uid;
        localStorage.setItem('UserId', user.uid);
        this.isLoggedIn$.next(true);
      } else {
        localStorage.removeItem('UserId');
        this.isLoggedIn$.next(false);
      }
    });
  }
  logout() {
    this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('UserId');
      this.router.navigate(['/home']);
      this.isLoggedIn$.next(false);
    });
  }
  getUserById(userId: string) {
    return this.angularFireDatabase
      .object(`${this.dbpath}/${userId}`)
      .valueChanges()
      .subscribe((user) => {
        this.userInfo.next(user);
      });
  }
}
