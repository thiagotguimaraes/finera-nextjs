import Posts from '@/components/posts'
import { getPosts } from '@/lib/posts'

export default async function PostsPage() {
	const posts = await getPosts()
	return <Posts posts={posts} />
}
