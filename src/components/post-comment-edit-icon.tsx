'use client'

import { PencilEditIcon } from './icons'
import { Button } from './ui/button'

const CommentEditIcon = ({ setIsEditing }: { setIsEditing: Function }) => {
	return (
		<Button
			variant='ghost'
			onClick={() => {
				setIsEditing(true)
			}}
		>
			<PencilEditIcon />
		</Button>
	)
}

export default CommentEditIcon
