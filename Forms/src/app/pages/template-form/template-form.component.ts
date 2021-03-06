import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: '',
    email: ''
  }

  onSubmit(form: any) {
    console.log(form.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

  public verificValidTouched(campo: any) {
    return !campo.valid && campo.touched
  }

  aplicCssError(campo: any) {
    return {
      'was-validated': this.verificValidTouched(campo)
    }
  }
}
