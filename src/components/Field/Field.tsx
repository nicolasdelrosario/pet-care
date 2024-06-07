import styles from './styles.module.css'

interface IField {
	label: string
	type?: string
	value: string
	placeholder?: string
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void
	options?: { value?: string; label: string; disabled?: boolean }[]
}

export default function Field({
	label,
	type = 'text',
	value,
	placeholder,
	onChange,
	options,
}: IField) {
	return (
		<div>
			<label>{label}</label>
			<div className={styles.field}>
				{options ? (
					<select value={value} onChange={onChange}>
						{options.map(option => (
							<option
								key={option.value}
								value={option.value}
								disabled={option.disabled}
							>
								{option.label}
							</option>
						))}
					</select>
				) : (
					<input
						type={type}
						value={value}
						placeholder={placeholder}
						onChange={onChange}
					/>
				)}
				<div>{/* icon */}</div>
			</div>
		</div>
	)
}
