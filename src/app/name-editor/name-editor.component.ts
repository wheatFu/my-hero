import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, Validators} from '@angular/forms';

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
    firstName: ['', Validators.required],
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
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  updateName() {
    this.name.setValue('Nacey');
  }

  onSubmit() {
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
