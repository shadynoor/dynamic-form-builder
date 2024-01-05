# Angular Dynamic Form Builder

## Using Angular Reactive Forms Module

### Features

```js
It Works with any type of inputs and selects and featured a custom type
called `select-with-input` that gives you a div contains an input field and select
to be used together ex. phone number
```

```js
If you used Input Type File you can easily get
File object of your uploaded file and base64Url of this file
```

```js
You can easily detect any changes happens in the form using
formChanges EventEmitter with detectChange boolean value equals true
```

### Just install it and call the DynamicFormBuilderModule inside your module or standalone component then use the component

```css
It Works Fine For Angular v14 and upper and compatible with SSR
```

for more Info [Angular Dynamic Form Builder Repo](https://github.com/shadynoor/dynamic-form-builder)
for more Info [Angular Dynamic Form Builder NPM](https://www.npmjs.com/package/form-builder-dynamically)

```js
Note That All Styles Classe must be in styles.css or inside your component style using

:host ::ng-deep {
  // class names
}
```

### Style Inputs

| Input.                         | Type   | Description                                                                                                                                                              |
| ------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| formClasses                    | string | set a class or more for the form tag                                                                                                                                     |
| inputContainer                 | string | set class or more for div which include the div holds label and input and shared across all input types                                                                  |
| inputFieldClasses              | string | set a class or more for a div that contains label and input tag and this for all types of inputs except ('checkbox' , 'radio' , 'file' , 'select' , 'select-with-file')  |
| radioFieldClasses              | string | set a class or more for a div that contains label and input type radio                                                                                                   |
| checkboxFieldClasses           | string | set a class or more for a div that contains label and input type checkbox                                                                                                |
| fileFieldClasses               | string | set a class or more for div that contains label, input file and button that trigger input incase you want to hide input and can by styled using parent class and the tag |
| selectFieldClasses             | string | set a class or more for a div that contains label and select tag                                                                                                         |
| selectWithInputClasses         | string | set a class or more for a div that contains label and a another div contains select tag and input tag                                                                    |
| requiredStarClasses            | string | set a class or more for the required \*                                                                                                                                  |
| errorAndBtnClasses             | string | set a class or more for a div outside the form that contains div for error messages and submit button                                                                    |
| errorMsgClasses                | string | set a class or more for a div that will contain the error message                                                                                                        |
| buttonClasses                  | string | set a class or more for the submit button                                                                                                                                |
| inputTagClasses                | string | set a class or more for input tag                                                                                                                                        |
| radioTagClasses                | string | set a class or more for radio input tag                                                                                                                                  |
| checkboxTagClasses             | string | set a class or more for checkbox input tag                                                                                                                               |
| selectTagClasses               | string | set a class or more for select tag                                                                                                                                       |
| inputTagLabelClasses           | string | set a class or more for input tag label                                                                                                                                  |
| radioTagLabelClasses           | string | set a class or more for radio input tag label                                                                                                                            |
| checkboxTagLabelClasses        | string | set a class or more for checkbox input tag label                                                                                                                         |
| selectTagLabelClasses          | string | set a class or more for select tag label                                                                                                                                 |
| fileTagLabelClasses            | string | set a class or more for file input tag label                                                                                                                             |
| inputWithSelectTagLabelClasses | string | set a class or more for input with select tag label                                                                                                                      |

### Text Inputs

| Input.              | Type   | Description                                                                                                                                             |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| requiredStarContent | string | by default a `*` and can be changed and accept html tags and also accepts html input, `ex. <span>**</span>`                                             |
| errorMsg            | string | error msg that will be shown, `ex. after submit and api return an error should create a variable that holds the error message and put it in this input` |
| buttonText          | string | inner text inside the submit button, by default Submit                                                                                                  |

### Features For Form Inputs

| Input.           | Type         | Description                                                                                                   |
| ---------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| formConfig       | FormConfig[] | this is `required` to initiate the component and includes all inputs configs                                  |
| resetAfterSubmit | boolean      | if true it will reset the form after submit `ex. you can set a variable to be true after submitting the form` |
| detectChange     | boolean      | this is `required with formChanges Output event`                                                              |
| isDisabled       | boolean      | if true the submit button will be disabled                                                                    |
| invalidDisable   | boolean      | if true the submit button will be disabled if the form is invalid                                             |

### Outputs

| Output.     | Description                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------- |
| getFormData | EventEmitter that gets `FormGroup` object on submit                                                 |
| formChanges | EventEmitter that gets `FormGroup` object on every change `but must detectChange input set to true` |
| fileData    | EventEmitter that gets object from uploaded contains file and base64Url for it                      |

### FormConfig Interface

| General Properties. | Type                          | Description                                                                                   |
| ------------------- | ----------------------------- | --------------------------------------------------------------------------------------------- |
| name                | string                        | `required` for every input                                                                    |
| type                | string                        | `required` for every input                                                                    |
| id                  | string                        | `required` for every input                                                                    |
| label               | string                        | require id if using with `radio or checkbox`                                                  |
| isRequired          | boolean                       | set input required field and automatic display required star                                  |
| placeholder         | string                        | placeholder for each input                                                                    |
| pattern             | `string or RegExp`            | Regex pattern for each input                                                                  |
| value               | `string or boolean or number` | if you want to set a value for the input `ex. if you entered edit page that restore the data` |
| minLength           | `string or number`            | min length of input                                                                           |
| maxLength           | `string or number`            | max length of input                                                                           |
| autocomplete        | string                        | set autocomplete to off                                                                       |

| Custom Properties. | Type      | Description                                                          |
| ------------------ | --------- | -------------------------------------------------------------------- |
| isPassword         | boolean   | required if type is `password and you'll use show hide for password` |
| eyeShow            | string    | if wanna change img of show password                                 |
| eyeHide            | string    | if wanna change img of hide password                                 |
| iconUrl            | string    | if user wanna put icon inside input                                  |
| options            | options[] | `required if type = radio or select`                                 |

| File Properties. | Type   | Description                                                 |
| ---------------- | ------ | ----------------------------------------------------------- |
| inputFileAccepts | string | `accept attribute inside input file ex. 'image/*' `         |
| imgPickerBtnText | string | `inner text inside upload button and also accept html tags` |

| Select-Input Type Properties. | Type               | Description                                 |
| ----------------------------- | ------------------ | ------------------------------------------- |
| selectName                    | string             | `name of select inside select-input-field`  |
| selectValue                   | `string or number` | `value of select inside select-input-field` |
| inputName                     | string             | `name of input inside select-input-field`   |
| inputValue                    | `string or number` | `value of input inside select-input-field`  |

| Options Interface. | Type      | Description                              |
| ------------------ | --------- | ---------------------------------------- |
| name               | `string`  | `name of option`                         |
| value              | `any`     | `value of option`                        |
| isDisabled         | `boolean` | `if you want to disable a single option` |

```ts
export interface FormConfig {
  name: string; // required
  type: string; // required
  id: string; // required

  isPassword?: boolean; // required if type is password and you'll use show hide for password
  eyeShow?: string; // if wanna change img of show password
  eyeHide?: string; // if wanna change img of hide password
  iconUrl?: string; // if user wanna put icon inside input

  label?: string; // require id if using with radio or checkbox
  options?: options[]; // required if type = radio
  value?: string | boolean | number;
  isRequired?: boolean;
  placeholder?: string;
  pattern?: string | RegExp;

  inputFileAccepts?: string;
  imgPickerBtnText?: string;

  // select with input custom type
  selectName?: string;
  inputName?: string;
  inputValue?: string | number;
  selectValue?: string | number;

  minLength?: string | number;
  maxLength?: string | number;
  autocomplete?: string | any;
}
export interface options {
  name: string;
  value: any;
  isDisabled?: boolean;
}
```

### Example

###### First Import DynamicFormBuilderModule and FormConfig Interface In Your Module or Standalone Component

```js
import { DynamicFormBuilderModule, FormConfig } from "dynamic-form-builder";
```

#### then use the component with inputs and outputs

```js
<dynamic-form-builder [formConfig]="myInputsConfigArray"
    (getFormData)="getForm($event)"
    [resetAfterSubmit]="true"
    [detectChange]="true"
    (formChanges)="detectChangeInForm($event)"
    (fileData)="getFileData($event)"
    [isDisabled]="false"
    [invalidDisable]="true"
    [formClasses]="'my-form-class'"
    [inputContainer]="'input-container'"
    [inputFieldClasses]="'input-field-class'"
    [radioFieldClasses]="'radio-field-class'"
    [checkboxFieldClasses]="'checkbox-field-class'"
    [fileFieldClasses]="'file-field-class'"
    [selectFieldClasses]="'select-field-class'"
    [selectWithInputClasses]="'select-input-field-class'"
    [errorAndBtnClasses]="'form-footer-class'"
    [errorMsgClasses]="'error-msg-class'"
    [buttonClasses]="'btn-submit-class'"
    [requiredStarClasses]="'required-class'"
    [iconClasses]="'icon-inside-input-class'"
    [requiredStarContent]="'*'"
    [errorMsg]="incomingErrorAfterSubmit"
    [buttonText]="'Signup'">
</dynamic-form-builder>

<!-- Image Preview -->
<img class="img-preview" [src]="imgUrl" alt="" />
```

#### then adjust your ts file to fit the component

```ts

  email: FormConfig = {
    name: 'email',
    type: 'text',
    id: 'test',
    label: 'Email',
    isRequired: true,
    placeholder: 'Enter Your Email',
    pattern: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  };

  password: FormConfig = {
    name: 'password',
    type: 'password',
    id: 'password',
    label: 'Password',
    isRequired: true,
    placeholder: 'Enter Your Password',
    maxLength: '15',
    isPassword: true, // required to enable show and hide functionalities
    eyeShow: '', // img for password to automatically show password
    eyeHide: '', // img for password to automatically hide password
  };

  age: FormConfig = {
    name: 'age',
    type: 'number',
    id: 'age',
    label: 'Enter Your Age',
    isRequired: true,
    placeholder: 'Enter Your Age',
  };

  country: FormConfig = {
    name: 'country',
    type: 'select',
    options: [
      { name: 'United Kindom', value: 'UK', isDisabled: true },
      { name: 'Egypt', value: 'EG', isDisabled: true },
      { name: 'Saudi Arabia', value: 'KSA' },
      { name: 'Emirates', value: 'UAE' },
      { name: 'Qatar', value: 'QA' },
    ],
    label: 'Select Your Country',
    id: 'country',
    isRequired: true,
    value: 'EG',
  };

  checkbox: FormConfig = {
    name: 'accept',
    type: 'checkbox',
    isRequired: true,
    label: 'Do You Accept Our Terms & Conditions?',
    id: 'accept',
    value: true,
  };

  work: FormConfig = {
    name: 'work',
    type: 'radio',
    id: 'work',
    label: "What's Your Current Work Type",
    isRequired: true,
    options: [
      { name: 'From Home', value: 'home' },
      { name: 'From Office', value: 'office' },
    ],
    value: 'home',
  };

  color: FormConfig = {
    name: 'color',
    type: 'color',
    id: 'color',
    label: "What's your favorite color?",
  };

  range: FormConfig = {
    name: 'range',
    type: 'range',
    id: 'range',
    label: 'How excited are you?',
    value: '20',
  };

  time: FormConfig = {
    name: 'time',
    type: 'time',
    id: 'time',
    label: 'Select Time',
  };

  // custom type
  PhoneWithSelectCountry: FormConfig = {
    name: 'phone-with-country',
    type: 'select-with-input',
    id: 'select-with-input',
    selectName: 'phone-select',
    inputName: 'phone-input',
    label: 'Phone Number',
    options: [
      { name: '<span>Code with flag</span>', value: '02' },
      { name: '991', value: '991' },
      { name: '996', value: '996' },
    ],
    selectValue: '991',
    inputValue: '123123123',
  };

  ImgUploader: FormConfig = {
    name: 'img',
    type: 'file',
    label: 'Upload Your Img',
    id: 'img',
    imgPickerBtnText: 'Upload',
    inputFileAccepts: 'image/*',
  };

  // with this format you can easily set the value for each input in edit mode for example
  myInputsConfigArray: FormConfig[] = [
    this.email,
    this.password,
    this.age,
    this.country,
    this.checkbox,
    this.work,
    this.color,
    this.range,
    this.time,
    this.PhoneWithSelectCountry,
    this.ImgUploader,
  ];

  incomingErrorAfterSubmit = '';
  imgUrl = '';

  getForm(form: FormGroup) {
    console.log(form.value);
    // Api calls for data
    // if error
    this.incomingErrorAfterSubmit = 'Invalid Data';
  }

  detectChangeInForm(form: FormGroup) {
    // any change in the form it will be log here
    console.log(form.value);
  }

  getFileData(event: any) {
    // if user upload a file (ex. image) it will be converted into a file and base64 Url
    // and it will be logged {file:File , base64Url: ''}
    console.log(event);
    this.imgUrl = event.base64Url;
  }
```

Created By [Shady Noor](https://github.com/shadynoor)
<br/>
LinkedIn [Shady Noor](https://github.com/shadynoor)
<br/>
shadynoor9@gmail.com
<br />
If you can improve it just pull it and do push a PR
