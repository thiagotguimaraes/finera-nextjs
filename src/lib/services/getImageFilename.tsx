const PUBLIC_IMAGES_PATHS = [
	'module-01-v2.jpg',
	'module-02-v2.jpg',
	'module-03-v2.jpg',
	'module-04-v2.jpg',
	'photo-1616819918024-6e2f3d0b09fe.jpg',
	'photo-1739909139794-e4f36d1838f8.jpg',
	'photo-1743051071378-2352ac2f4e48.jpg',
	'photo-1743062356649-eb59ce7b8140.jpg',
	'premium_photo-1668017178993-4c8fc9f59872.jpg',
	'premium_photo-1672287578336-c32928d2524d.jpg',
	'premium_photo-1709901922298-0a3eb89b7e79.jpg',
	'premium_photo-1728568724868-5d24ac1238ec.jpg',
	'profile-1695823050356-74ac4ce207dfimage.jpg',
	'profile-1698776037447-7825b5495803image.jpg',
]

export function getImageFilename(i: number) {
	const index = i % PUBLIC_IMAGES_PATHS.length
	return PUBLIC_IMAGES_PATHS[index]
}
