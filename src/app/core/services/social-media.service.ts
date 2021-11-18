import { Injectable } from '@angular/core';
import { SocialMedia } from '../models/professional.model';

@Injectable({
	providedIn: 'root',
})
export class SocialMediaService {
	availableSocialMedias = {
		facebook: '',
		twitter: '',
		linkedin: '',
		instagram: '',
		whatsapp: '',
		phone: '',
		site: '',
		email: '',
	};

	fillSocialMedia(socialMedias: string) {
		this.availableSocialMedias = {
			facebook: '',
			twitter: '',
			linkedin: '',
			instagram: '',
			whatsapp: '',
			phone: '',
			site: '',
			email: '',
		};
		if (!socialMedias) {
			return;
		}
		const socialMediaArray: SocialMedia[] = JSON.parse(socialMedias);
		socialMediaArray.forEach((element) => {
			this.availableSocialMedias[element.id.toLocaleLowerCase()] = this.getOnlyUserId(element);
			//console.log(this.availableSocialMedias[element.id.toLocaleLowerCase()]);
		});
	}

	getOnlyUserId(element: SocialMedia): string {
		switch (element.id) {
			case 'whatsapp':
				return element.uri.substring(element.uri.indexOf('/', 10) + 1).substring(3);
			case 'phone':
				return element.uri.substring(element.uri.indexOf(':', 1) + 1).substring(3);
			case 'site':
				return element.uri;
			default:
				break;
		}
		return element.uri.substring(element.uri.indexOf('/', 10) + 1);
	}

	getKeysSocialMedia() {
		return Object.keys(this.availableSocialMedias);
	}

	getSocialMediaElement(key: string) {
		return this.availableSocialMedias[key];
	}

	addSocialMedia(): string {
		const socialMedias = [];
		this.getKeysSocialMedia().forEach((element) => {
			switch (element) {
				case 'Whatsapp':
					socialMedias.push({
						id: element,
						uri: `https://wa.me/+55${this.getSocialMediaElement(element)}`,
					});
					break;
				case 'phone':
					socialMedias.push({
						id: element,
						uri: `tel:+55${this.getSocialMediaElement(element)}`,
					});
					break;
				case 'site':
					socialMedias.push({
						id: element,
						uri: `${this.getSocialMediaElement(element)}`,
					});
					break;

				default:
					socialMedias.push({
						id: element,
						uri: `https://${element}.com/${this.getSocialMediaElement(element)}`,
					});
					break;
			}
		});
		return socialMedias.length > 0 ? JSON.stringify(socialMedias) : '';
	}
}
