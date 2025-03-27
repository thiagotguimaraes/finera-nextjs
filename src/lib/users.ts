export interface User {
	id: number
	name: string
	username: string
	password: string
	email: string
	address: Address
	phone: string
	website: string
	company: Company
}

export interface Address {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: Geo
}

export interface Geo {
	lat: string
	lng: string
}

export interface Company {
	name: string
	catchPhrase: string
	bs: string
}

export const user1 = {
	id: 1,
	name: 'Leanne Graham',
	username: 'Bret',
	email: 'Sincere@april.biz',
	address: {
		street: 'Kulas Light',
		suite: 'Apt. 556',
		city: 'Gwenborough',
		zipcode: '92998-3874',
		geo: {
			lat: '-37.3159',
			lng: '81.1496',
		},
	},
	phone: '1-770-736-8031 x56442',
	website: 'hildegard.org',
	company: {
		name: 'Romaguera-Crona',
		catchPhrase: 'Multi-layered client-server neural-net',
		bs: 'harness real-time e-markets',
	},
}

export async function getUser(email: string): Promise<User> {
	return { ...user1, password: '1234' }
}

export async function createUser(email: string, password: string): Promise<User> {
	return { ...user1, password }
}
