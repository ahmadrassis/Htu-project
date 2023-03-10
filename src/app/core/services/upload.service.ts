import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireStorageReference,
} from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  dbpath = '/files';
  storageRef: AngularFireStorageReference;
  fiuleUrl: string = '';
  constructor(private stoarge: AngularFireStorage) {
    this.storageRef = stoarge.ref(this.dbpath);
  }
  upload(file: File) {
    const filePath = `${this.dbpath}/${new Date()}${file.name}`;
    this.storageRef = this.stoarge.ref(filePath);
    return this.stoarge.upload(filePath, file).snapshotChanges();
  }
  getDownloadURL() {
    return this.storageRef.getDownloadURL();
  }
}
