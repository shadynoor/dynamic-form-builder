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

  // select with input
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
