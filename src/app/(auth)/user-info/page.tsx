import { auth } from '@/auth'
import Image from 'next/image'

export default async function UserInfo() {
	const session = await auth()
	return (
		<div>
			<p> Signed user name: {session?.user?.name}</p>
			<p> Signed user email: {session?.user?.email}</p>
			{session?.user?.image && (
				<Image
					src={session.user.image}
					width={48}
					height={48}
					alt={session.user.name ?? 'Avatar'}
					style={{ borderRadius: '50%' }}
				/>
			)}
		</div>
	)
}
