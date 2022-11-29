import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contats',
  templateUrl: './contats.component.html',
  styleUrls: ['./contats.component.css']
})
export class ContatsComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      ddd: ['34', Validators.required],
      phone: ['912345678', Validators.required],
      email: ['@gmail.com', Validators.required],
      messageSub: ['Outros', Validators.required],
      message: ['O que achar relevante', Validators.required],
    });
  }

  onButtonSaveClick(): void {
    if (!this.formGroup.valid) {
      window.alert('O formulário não é válido');
      console.log(this.formGroup.controls.firstName.value);
      console.log(this.formGroup.controls.lastName.value);
      console.log(this.formGroup.controls.ddd.value);
      console.log(this.formGroup.controls.phone.value);
      console.log(this.formGroup.controls.email.value);
      console.log(this.formGroup.controls.messageSub.value);
      console.log(this.formGroup.controls.message.value);
      return;
    }

    console.log('O valor é valido');
  }

  ngOnInit(): void {
  }

}
