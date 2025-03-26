export const API_URL = 'https://jsonplaceholder.typicode.com'

export interface Post {
	userId: string
	id: string
	title: string
	body: string
}

export interface Comment {
	postId: string
	id: string
	name: string
	email: string
	body: string
}

export async function getPosts(): Promise<Post[]> {
	const data = await fetch(`${API_URL}/posts`)
	const posts = await data.json()
	return posts
}

export async function getPost(id: string): Promise<Post> {
	const data = await fetch(`${API_URL}/posts/${id}`)
	const post = await data.json()
	return post
}

export async function getPostComments(id: string): Promise<Comment[]> {
	const data = await fetch(`${API_URL}/posts/${id}/comments`)
	const comments = await data.json()
	return comments
}
