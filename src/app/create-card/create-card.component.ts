import { CardService } from './../services/card.service';
import { SPORTS } from './../mocks/mock-sports';
import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../mocks/mock-teams';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  constructor(private firestore: AngularFirestore,
              private afStorage: AngularFireStorage,
              private cardservice: CardService) { }

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  selectedFile: File;
  imagePath;
  imgURL: any;
  message: string;
  sports = SPORTS;
  teams = TEAMS;
  isDisabled: Boolean = true;
  isHidden: Boolean = true;
  selectedSport: String = 'All';
  selectedTeam: String = 'All';
  numbered: String = 'No';
  relic: String = 'No';

  getTeamNames() {
    if (this.selectedSport === 'All') {
      this.selectedTeam = 'All';
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
      this.teams = TEAMS.filter(team => team.sport === this.selectedSport);
    }
  }

  isNumbered() {
    if (this.numbered === 'Yes') {
      return false;
    } else {
      return true;
    }
  }

  hasRelic() {
    if (this.relic === 'Yes') {
      return false;
    } else {
      return true;
    }
  }

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

  onSubmit(form: NgForm) {
    console.log(form);
    const data = Object.assign({}, form.value);
    console.log(data);
  }

  ngOnInit() {
  }

}
