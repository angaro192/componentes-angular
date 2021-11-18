import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from './../../core/services/social-media.service';

@Component({
	selector: 'app-profile-edit',
	templateUrl: './profile-edit.component.html',
	styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
	isSomethingChanged: boolean = false;
	socialMediaApi = JSON.parse(
		'[{"id":"facebook","uri":"https://facebook.com/Francês"},{"id":"twitter","uri":"https://twitter.com/Joásdecopas"},{"id":"linkedin","uri":"https://linkedin.com/JoasFeitosa"},{"id":"instagram","uri":"https://instagram.com/joass._"},{"id":"phone","uri":"tel:+558199136647"},{"id":"email","uri":"https://email.com/joas.feitosas@direction.com.br"}]'
	);
	socialMediaEx =
		'[{"id":"facebook","uri":"https://facebook.com/Francês"},{"id":"twitter","uri":"https://twitter.com/Joásdecopas"},{"id":"linkedin","uri":"https://linkedin.com/JoasFeitosa"},{"id":"instagram","uri":"https://instagram.com/joass._"},{"id":"phone","uri":"tel:+558199136647"},{"id":"email","uri":"https://email.com/joas.feitosas@direction.com.br"}]';
	constructor(public socialMediaService: SocialMediaService) {}

	ngOnInit(): void {
		this.socialMediaService.fillSocialMedia(this.socialMediaEx);
		console.log(JSON.parse(this.socialMediaEx));
	}

	confirmDeleteContact() {
		console.log('Confirmado delete');
	}

	onChange() {
		this.isSomethingChanged = true;
	}
}
