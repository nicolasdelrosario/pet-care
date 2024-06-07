import styles from './styles.module.css'

interface ITitle {
	title: string
	subtitle?: string
}

export default function Title({ title, subtitle }: ITitle) {
	return (
		<>
			<h1 className={styles.title}>{title}</h1>
			{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
		</>
	)
}
