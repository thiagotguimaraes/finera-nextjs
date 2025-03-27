import NavLink from './nav-link'
import SignoutButton from './signout-button'

export default function NavHeader() {
	return (
		<header id='main-header'>
			<nav>
				<ul>
					<li>
						<NavLink href='/posts'>Posts</NavLink>
					</li>
					<li>
						<NavLink href='/commnets'>Comments</NavLink>
					</li>
					<li>
						<NavLink href='/users'>Users</NavLink>
					</li>
				</ul>
			</nav>
			<SignoutButton />
		</header>
	)
}
