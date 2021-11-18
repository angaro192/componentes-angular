import { Specialty } from './specialty.model';

export class User {
	id: string;
	firstLetter: string;
	name: string;
	email: string;
	socialMedia: string;
	avatarSource: number;
	avatarImage: string;
	avatarUri: string;
}
export class Professional {
	constructor() {
		this.user = new User();
		this.specialties = [];
	}

	id: string;
	userId: string;
	code: string;
	user: User;
	specialties: Specialty[];
}
export class SocialMedia {
	id: string;
	uri: string;
}
