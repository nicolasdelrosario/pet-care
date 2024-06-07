import Image, { ImageProps } from 'next/image'
import styles from './styles.module.css'

interface IImageProps extends ImageProps {
	quality?: number
}

export default function Img({
	width,
	height,
	src,
	alt,
	quality = 80,
}: IImageProps) {
	return (
		<figure className='img__container'>
			<Image
				className={styles.image}
				width={width}
				height={height}
				src={src}
				alt={alt}
				quality={quality}
			/>
		</figure>
	)
}
