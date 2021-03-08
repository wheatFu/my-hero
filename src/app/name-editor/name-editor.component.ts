import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, Validators, AbstractControl, ValidatorFn, FormGroup, ValidationErrors} from '@angular/forms';


/**
 * 跨字段验证
 * @param controlGroup 控件组
 */
const nameAgeCrossValidator: ValidatorFn = (controlGroup: FormGroup): ValidationErrors | null => {

  // 获取子控件的信息
  //
  const name = controlGroup.get('firstName');
  const age = controlGroup.get('lastName');

  console.log(name);
  console.log(age);

  return !name && !age ? { nameAgeInvalid: true } : null;
};

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  // 单个
  name = new FormControl('');
  // 多个
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  },
  { validators: [nameAgeCrossValidator] }
  );

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  updateName() {
    this.name.setValue('Nacey');
  }

  onSubmit() {

    const la = this.profileForm.get('firstName');

    if (la.value === '11') {
      window.alert('姓名不能为11');
      return;
    }

    console.log(la.value);
    console.log(this.profileForm.value);
  }

  addAlias() {
    this.aliases.push(this.fb.control('red'));
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'WZA',
      address: {
        street: 'CSDASE',
      }
    });
  }
  ngOnInit() {
  }

}
