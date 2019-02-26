import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  constructor() { }

  selectedFile: File;
  public imagePath;
  imgURL: any;
  public message: string;

  preview(files) {
    if (files.length === 0) {
      return;
    }
 
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
 
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };

  }
  ngOnInit() {
  }

}
