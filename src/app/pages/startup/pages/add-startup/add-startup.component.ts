import { Location } from '@angular/common';
import { StartupsService } from 'src/app/core/services/startups.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Startup } from './../../../../core/interface/startups.interface';
import { Component } from '@angular/core';
import { UploadService } from 'src/app/core/services/upload.service';
@Component({
  selector: 'app-add-startup',
  templateUrl: './add-startup.component.html',
  styleUrls: ['./add-startup.component.css'],
})
export class AddStartupComponent {
  formGroup: FormGroup;
  imgSrc: any;
  constructor(
    private FormBuilder: FormBuilder,
    private _strtupService: StartupsService,
    private _uploadService: UploadService,
    private location: Location
  ) {
    this.formGroup = this.FormBuilder.group({
      city: null,
      emailAddress: [null, [Validators.email, Validators.required]],
      logo: null,
      name: [null, [Validators.required]],
      numberOfEmployees: null,
      sectors: [null, [Validators.required]],
      websiteUrl: [null, [Validators.required]],
      yearOfEstablish: null,
    });
  }

  getErrorMessage(control: any) {
    if (control && control.errors) {
      if (control.hasError('required')) {
        return 'You must enter a value';
      }
      if (control.hasError('email')) {
        return 'Not a valid email';
      }
    }
    return '';
  }
  onAddClicked() {
    if (this.formGroup.invalid) {
      this.ValidateFormGroup();
    } else {
      if (this.formGroup.controls['logo'].value) {
        this.upload();
        this._uploadService.upload(this.formGroup.controls['logo'].value);
      } else {
        this.createStartup();
      }
    }
  }

  upload() {
    this._uploadService
      .upload(this.formGroup.controls['logo'].value)
      .subscribe((file) => {
        if (file?.metadata) {
          this.getDownloadURL();
        }
      });
  }

  getDownloadURL() {
    this._uploadService.getDownloadURL().subscribe((url) => {
      console.log();
      this.formGroup.controls['logo'].setValue(url);
      this.createStartup();
    });
  }

  createStartup() {
    this._strtupService
      .create({
        name: this.formGroup.controls['name'].value,
        emailAddress: this.formGroup.controls['emailAddress'].value,
        websiteUrl: this.formGroup.controls['websiteUrl'].value,
        sectors: this.formGroup.controls['sectors'].value,
        city: this.formGroup.controls['city'].value,
        numberOfEmployees: this.formGroup.controls['numberOfEmployees'].value,
        logo: this.formGroup.controls['logo'].value,
        yearOfEstablish: this.formGroup.controls['yearOfEstablish'].value,
      })
      .then(() => {
        this.location.back();
      });
  }

  onFileInputChange($event: any) {
    console.log($event);

    this.formGroup.controls['logo'].setValue($event.target.files[0]);

    const reader = new FileReader();
    reader.onload = (e) => (this.imgSrc = reader.result);
    reader.readAsDataURL(this.formGroup.controls['logo'].value);
  }
  ValidateFormGroup() {
    Object.keys(this.formGroup.controls).forEach((filed) => {
      const control = this.formGroup.get(filed);
      control?.markAsTouched({ onlySelf: true });
    });
  }

}
