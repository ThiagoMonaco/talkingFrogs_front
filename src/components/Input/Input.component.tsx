import React, { useEffect, useState } from 'react'
import { ErrorMessageStyled, InputFieldStyled, InputLabelStyled, InputStyled } from '@components/Input/styles'


interface InputProps {
	id: string
	name: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string
	label: string
	errorMessage?: string
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export default function Input({id, name, onChange, value, label, errorMessage = '', onBlur}:InputProps) {

	const [onError, setOnError] = useState(false)

	useEffect(() => {
		console.log(errorMessage)
		setOnError(errorMessage !== '')
	}, [errorMessage])

	return (
		<InputStyled>
			<InputLabelStyled withError={onError} htmlFor={name}> {label} </InputLabelStyled>
			<InputFieldStyled
				id={id}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				withError={onError}
			/>
			{errorMessage && <ErrorMessageStyled> {errorMessage} </ErrorMessageStyled>}
		</InputStyled>
	)
}