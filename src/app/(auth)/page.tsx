import NavHeader from '@/components/nav-header'
import PostsPage from './posts/page'

export default async function Home() {
	return (
		<div>
			<NavHeader />
			<PostsPage />
		</div>
	)
}
