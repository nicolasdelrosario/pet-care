import styles from './styles.module.css'

import { Form, Field, Button, Title, Link } from 'app/components'

export default function page() {
	return (
		<main className={styles.main}>
			<Form>
				<Title title='PetCare' subtitle='Ingresa a tu cuenta' />
				<Field label='Email' type='email' value='' placeholder='Email' />
				<Field
					label='Contraseña'
					type='password'
					value=''
					placeholder='Contraseña'
				/>
				<p>
					No tienes una cuenta? <Link href='/registrarse'>Registrate</Link>
				</p>
				<Button title='Iniciar Sesión' />
			</Form>
		</main>
	)
}
