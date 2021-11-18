import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const AngularModules = [CommonModule, FormsModule, RouterModule, ReactiveFormsModule];
const SharedComponents = [];
@NgModule({
	declarations: [...SharedComponents],
	imports: [...AngularModules],
	exports: [...AngularModules, ...SharedComponents],
	providers: [],
})
export class SharedModule {}
