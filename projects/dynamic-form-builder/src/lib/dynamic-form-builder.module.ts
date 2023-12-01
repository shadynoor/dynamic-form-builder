import { NgModule } from '@angular/core';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicFormBuilderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormBuilderComponent],
})
export class DynamicFormBuilderModule {}
