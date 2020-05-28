import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators }   from '@angular/forms';
import { Directive, forwardRef, Attribute,OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS,AbstractControl,ValidatorFn } from '@angular/forms';

import { User } from './user';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent{

  model = new User('',null,'','',null);
  submitted = false;
  onSubmit() { 
    this.submitted = true;
   }
   refresh(){
     window.location.reload();
   }
  
}
