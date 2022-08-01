export interface IUser {
	email: string;
	password: string;
}

export interface IEvents {
	id: number;
	date: string;
	title: string;
}

export interface IDocs {
	id: number;
	title: string;
	sub_title: string;
	status: string;
	parties: [];
	object: string;
}
