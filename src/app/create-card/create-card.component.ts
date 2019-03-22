import { CardService } from './../services/card.service';
import { SPORTS } from './../mocks/mock-sports';
import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../mocks/mock-teams';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  constructor(private cardservice: CardService) { }

  selectedFile: File;
  imagePath;
  imgURL: any;
  message: string;
  sports = SPORTS;
  teams = TEAMS;

  getTeamNames() {
    if (this.cardservice.formData.sport === 'All') {
      this.cardservice.formData.team = 'All';
    } else {
      this.teams = TEAMS.filter(team => team.sport === this.cardservice.formData.sport);
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
    const id = Math.random().toString(36).substring(2);
    const data = Object.assign({}, form.value);
    data.imageLink = id;

    this.cardservice.createCardFirestore(data);
    this.cardservice.addImageToFireStorage(this.imagePath, id);
  }

  resetForm(form?: NgForm) {
    if (form != null ) {
      form.resetForm();
    }
    this.cardservice.formData = {
      id: null,
      playerName: '',
      cardCompany: '',
      cardSet: '',
      year: null,
      sport: 'All',
      team: 'All',
      rookieCard: false,
      auto: false,
      relic: false,
      relicType: '',
      numbered: false,
      numberedTo: null,
      imageLink: ''
    };
  }

  ngOnInit() {
    this.resetForm();
  }

}
