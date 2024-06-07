import styles from './styles.module.css'

interface IButtonProps {
	title: string
	onClick?: () => void
}

export default function Button({ title, onClick }: IButtonProps) {
	return (
		<button className={styles.button} onClick={onClick}>
			{title}
		</button>
	)
}
