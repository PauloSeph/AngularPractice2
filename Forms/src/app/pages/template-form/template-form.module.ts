import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from 'src/app/form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule { }
