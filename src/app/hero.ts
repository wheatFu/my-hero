import { ValidatorFn, AbstractControl } from '@angular/forms';

export class Hero {
   id: number;
   name: string;
}

export class MBQDHero {
   constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo?: string) {

      }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
   return (control: AbstractControl): {[key: string]: any} | null => {
     const forbidden = nameRe.test(control.value);
     return forbidden ? {forbiddenName: {value: control.value}} : null;
   };
 }
