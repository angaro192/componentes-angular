import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEditComponent } from './main/profile-edit/profile-edit.component';

const routes: Routes = [
	{
		path: '',
		children: [
			// {
			//   path: 'editprofile',
			//   loadChildren: () => import('')
			// },
			{
				path: 'editprofile',
				component: ProfileEditComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
