import styles from './styles.module.css'

interface IForm {
	children: React.ReactNode
}

export default function Form({ children }: IForm) {
	return <form className={styles.form}>{children}</form>
}
