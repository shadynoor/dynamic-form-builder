import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormConfig } from './form-configs.interface';

@Component({
  selector: 'dynamic-form-builder',
  template: `
    <div class="form-container">
      <form
        (change)="detectChange ? onChange() : null"
        [formGroup]="dynamicForm"
        (ngSubmit)="onSubmit()"
        [class]="formClasses"
        *ngIf="formConfig.length > 0"
      >
        <div
          [class]="inputContainer"
          *ngFor="let field of formConfig; let i = index"
        >
          <!-- *************************************** General Input *************************************** -->
          <div
            [class]="inputFieldClasses"
            class="inputField"
            *ngIf="
              field.type != 'checkbox' &&
              field.type != 'radio' &&
              field.type != 'file' &&
              field.type != 'select' &&
              field.type != 'select-with-input'
            "
          >
            <label
              *ngIf="
                field.label &&
                field.type != 'checkbox' &&
                field.type != 'radio' &&
                field.type != 'file' &&
                field.type != 'select' &&
                field.type != 'select-with-input'
              "
              [for]="field.id || ''"
              [class]="inputTagLabelClasses"
              >{{ field.label }}
              <span
                [class]="requiredStarClasses"
                *ngIf="field.isRequired"
                [innerHTML]="requiredStarContent"
              ></span
            ></label>
            <div class="input-with-icon">
              <input
                *ngIf="
                  field.type != 'checkbox' &&
                  field.type != 'radio' &&
                  field.type != 'file' &&
                  field.type != 'select' &&
                  field.type != 'select-with-input'
                "
                [type]="field.type || 'text'"
                [name]="field.name"
                [id]="field.id || ''"
                [formControlName]="field.name"
                [placeholder]="field.placeholder ? field.placeholder : ''"
                [minlength]="field.minLength || ''"
                [maxlength]="field.maxLength || ''"
                [autocomplete]="field.autocomplete"
                [class]="inputTagClasses"
              />
              <div [class]="iconClasses" *ngIf="field.isPassword">
                <span
                  class="password-eye"
                  (click)="togglePassword(field)"
                  *ngIf="field.type == 'text'"
                >
                  <img *ngIf="field.eyeShow" [src]="field.eyeShow" alt="show" />
                </span>
                <span
                  class="password-eye"
                  (click)="togglePassword(field)"
                  *ngIf="field.type == 'password'"
                >
                  <img *ngIf="field.eyeHide" [src]="field.eyeHide" alt="hide" />
                </span>
              </div>
              <div
                class="input-img"
                *ngIf="field.iconUrl && !field.eyeShow && !field.eyeHide"
              >
                <span *ngIf="field.iconUrl && !field.eyeShow && !field.eyeHide">
                  <img
                    [src]="field.iconUrl ? field.iconUrl : ''"
                    alt="input-img"
                  />
                </span>
              </div>
            </div>
          </div>

          <!-- Textarea -->

          <div
            [class]="inputFieldClasses"
            class="inputField"
            *ngIf="
              field.type != 'checkbox' &&
              field.type != 'radio' &&
              field.type != 'file' &&
              field.type != 'select' &&
              field.type != 'select-with-input'
            "
          >
            <label
            *ngIf="field.type == 'textarea'"
              [for]="field.id || ''"
              [class]="inputTagLabelClasses"
              >{{ field.label }}
              <span
                [class]="requiredStarClasses"
                *ngIf="field.isRequired"
                [innerHTML]="requiredStarContent"
              ></span
            ></label>
            <div class="input-with-icon">
              <textarea
              *ngIf="field.type == 'textarea'"
                [name]="field.name"
                [id]="field.id || ''"
                [formControlName]="field.name"
                [placeholder]="field.placeholder ? field.placeholder : ''"
                [minlength]="field.minLength || ''"
                [maxlength]="field.maxLength || ''"
                [autocomplete]="field.autocomplete"
                [class]="inputTagClasses"
              ></textarea>
            </div>
          </div>

          <!-- *************************************** Radio Input *************************************** -->

          <div
            *ngIf="field.type == 'radio'"
            class="radioField"
            [class]="radioFieldClasses"
          >
            <label *ngIf="field.label" [class]="radioTagLabelClasses"
              >{{ field.label }}
              <span [class]="requiredStarClasses" *ngIf="field.isRequired"
                >*</span
              ></label
            >
            <div class="radio-options" *ngFor="let option of field.options">
              <input
                type="radio"
                [name]="field.name"
                [id]="option.name"
                [formControlName]="field.name"
                [value]="option.value"
                [class]="radioTagClasses"
              />
              <label [for]="option.name" *ngIf="option.name"
                >{{ option.name }}
              </label>
            </div>
          </div>

          <!-- *************************************** Checkbox Input *************************************** -->

          <div
            *ngIf="field.type == 'checkbox'"
            class="checkboxField"
            [class]="checkboxFieldClasses"
          >
            <label
              *ngIf="field.label && field.id"
              [for]="field.id || ''"
              [class]="checkboxTagLabelClasses"
              >{{ field.label }}
              <span
                [class]="requiredStarClasses"
                *ngIf="field.isRequired"
                [innerHTML]="requiredStarContent"
              ></span
            ></label>
            <input
              type="checkbox"
              [name]="field.name"
              [formControlName]="field.name"
              [id]="field.id || ''"
              [class]="checkboxTagClasses"
            />
          </div>

          <!-- *************************************** File Input *************************************** -->

          <div
            class="fileField"
            [class]="fileFieldClasses"
            *ngIf="field.type == 'file'"
          >
            <label
              *ngIf="field.label && field.id"
              [for]="field.id || ''"
              [class]="fileTagLabelClasses"
              >{{ field.label }}
              <span
                [class]="requiredStarClasses"
                *ngIf="field.isRequired"
                [innerHTML]="requiredStarContent"
              ></span
            ></label>

            <input
              type="file"
              [name]="field.name"
              [formControlName]="field.name"
              [id]="field.id || ''"
              #imgPicker
              (change)="onPickImage($event)"
              [accept]="field.inputFileAccepts"
            />
            <button
              type="button"
              (click)="imgPicker.click()"
              [innerHTML]="field.imgPickerBtnText"
            ></button>
          </div>

          <!-- *************************************** Select Input *************************************** -->

          <div
            class="selectField"
            *ngIf="field.type == 'select'"
            [class]="selectFieldClasses"
          >
            <label
              *ngIf="field.label"
              [for]="field.id || ''"
              [class]="selectTagLabelClasses"
              >{{ field.label }}
              <span
                [class]="requiredStarClasses"
                *ngIf="field.isRequired"
                [innerHTML]="requiredStarContent"
              ></span
            ></label>
            <select
              [name]="field.name"
              [id]="field.id || ''"
              [formControlName]="field.name"
              [value]="field.value"
              [class]="selectTagClasses"
            >
              <option
                *ngFor="let option of field.options"
                [value]="option.value"
                [disabled]="option.isDisabled"
              >
                {{ option.name }}
              </option>
            </select>
          </div>

          <!-- *************************************** Select With Text Input *************************************** -->

          <div
            class="selectWithInput"
            *ngIf="field.type == 'select-with-input'"
            [class]="selectWithInputClasses"
          >
            <label *ngIf="field.label" [class]="inputWithSelectTagLabelClasses"
              >{{ field.label }}
              <span
                [class]="requiredStarClasses"
                *ngIf="field.isRequired"
                [innerHTML]="requiredStarContent"
              ></span
            ></label>
            <div>
              <select
                [id]="field.id + i || i + 2"
                [formControlName]="field.selectName!"
                [value]="field.selectValue"
              >
                <option
                  *ngFor="let option of field.options"
                  [value]="option.value"
                  [innerHTML]="option.name"
                >
                  {{ option.name }}
                </option>
              </select>
              <input
                [type]="field.type || 'text'"
                [id]="field.id + i || i + 1"
                [formControlName]="field.inputName!"
                [placeholder]="field.placeholder ? field.placeholder : ''"
                [value]="field.inputValue"
              />
            </div>
          </div>
        </div>
      </form>

      <!-- *************************************** Error and Submit *************************************** -->

      <div [class]="errorAndBtnClasses">
        <div [class]="errorMsgClasses">
          {{ errorMsg }}
        </div>
        <button
          type="submit"
          [class]="buttonClasses"
          (click)="onSubmit()"
          [disabled]="
            invalidDisable ? dynamicForm.invalid : isDisabled ? true : false
          "
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .form-container {
        position: relative;
      }
      .input-with-icon {
        position: relative;
      }
    `,
  ],
})

// .selectWithInput {
//   position: relative;
//   width: fit-content;
// }
// .selectWithInput select {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
// }
export class DynamicFormBuilderComponent implements OnInit {
  dynamicForm!: FormGroup;
  //Essential
  @Input() formConfig!: FormConfig[]; // Array that hold our inputs attributes and settings

  // submit
  @Output() getFormData = new EventEmitter<FormGroup>(); // get formGroup object on submit
  @Input() buttonClasses = ''; // submit button class
  @Input() buttonText = 'Submit'; // Inner text of submit button
  @Input() isDisabled!: boolean | null; // flag to set submit button as disabled
  @Input() invalidDisable = false; // flag to set submit button disabled when form is invalid
  @Input() resetAfterSubmit = false; // flag to reset form after submit

  // detect change in the form
  @Input() detectChange!: boolean; // a flag that emits any change happens in the form
  @Output() formChanges = new EventEmitter<FormGroup>(); // if detectChange is true any change happen in the form

  // input type file
  @Output() fileData = new EventEmitter<{ file: File; base64Url: any }>(); // get image data as an object of file and base64Url

  // style form

  // error msg
  @Input() errorMsg!: string; // receive error msg
  @Input() errorMsgClasses = ''; // class for incoming error messages

  // style
  @Input() formClasses = ''; // a class for the whole form -> inputsContainer , submit button and error msg
  @Input() inputContainer = ''; // a class for the container of all inputs
  @Input() inputFieldClasses = ''; // control input field styles with all types except special types
  @Input() requiredStarClasses = ''; // required star
  @Input() requiredStarContent = '*';
  @Input() fileFieldClasses = ''; // control file field input with it's button
  @Input() radioFieldClasses = ''; // control radio field
  @Input() checkboxFieldClasses = ''; // control checkbox field
  @Input() selectFieldClasses = ''; // control select field
  @Input() selectWithInputClasses = ''; // control select with input
  @Input() errorAndBtnClasses = ''; // control select with input
  @Input() iconClasses = ''; // control select with input
  @Input() inputTagClasses = ''; // each input class
  @Input() radioTagClasses = ''; // control select with input
  @Input() checkboxTagClasses = ''; // control select with input
  @Input() selectTagClasses = ''; // control select with input
  @Input() inputTagLabelClasses = ''; // control select with input
  @Input() radioTagLabelClasses = ''; // control select with input
  @Input() checkboxTagLabelClasses = ''; // control select with input
  @Input() selectTagLabelClasses = ''; // control select with input
  @Input() fileTagLabelClasses = ''; // control select with input
  @Input() inputWithSelectTagLabelClasses = ''; // control select with input

  constructor(private _fb: FormBuilder) {}

  // todo: default style

  ngOnInit(): void {
    if (!this.formConfig) {
      throw new Error('No formConfig provided!');
    }
    this.dynamicForm = this.createFromGroup(this.formConfig);
  }

  createFromGroup(config: any[]) {
    const group = this._fb.group({});
    config.forEach((field) => {
      let control;
      if (field.type == 'select-with-input') {
        let control2;
        if (field.isRequired) {
          control = new FormControl(null, Validators.required);
          control2 = new FormControl(null, Validators.required);
        } else {
          control = new FormControl(null);
          control2 = new FormControl(null);
        }
        group.addControl(field.inputName, control);
        group.addControl(field.selectName, control2);
      } else if (field.type == 'radio') {
        if (field.isRequired) {
          control = new FormControl(null, Validators.required);
        } else {
          control = new FormControl(null);
        }
        field.options.forEach((e: any) => {
          if (e.value == field.value) {
            if (field.isRequired) {
              control = new FormControl(field.value, Validators.required);
            } else {
              control = new FormControl(field.value);
            }
          }
        });
        group.addControl(field.name, control);
      } else {
        if (field.isRequired) {
          control = new FormControl(field.value || '', [
            Validators.required,
            Validators.pattern(field.pattern),
          ]);
        } else {
          control = new FormControl(field.value || '', [
            Validators.nullValidator,
            Validators.pattern(field.pattern),
          ]);
        }
        group.addControl(field.name, control);
      }
    });
    return group;
  }

  onSubmit() {
    this.getFormData.emit(this.dynamicForm);
    if (this.resetAfterSubmit) {
      setTimeout(() => {
        this.dynamicForm.reset();
      }, 500);
    }
  }
  onChange() {
    this.formChanges.emit(this.dynamicForm);
  }

  togglePassword(field: any) {
    if (field.type == 'text') {
      field.type = 'password';
    } else {
      field.type = 'text';
    }
  }

  onPickImage(event: Event) {
    const file = (event.target as any).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.fileData.emit({ file: file, base64Url: reader.result });
    };
    reader.readAsDataURL(file);
  }
}
