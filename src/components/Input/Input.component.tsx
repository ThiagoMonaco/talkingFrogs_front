import React from 'react'
import { ErrorMessageStyled, InputLabelStyled, InputStyled } from '@components/Input/styles'
import { Field } from "formik";


interface InputProps {
	id: string
	name: string
	label: string
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	validate?: (value: any) => undefined | string | Promise<any>
	validateOnBlur?: boolean
}

export default function Input({id, name, onChange, label, onBlur, validate, validateOnBlur}:InputProps) {
	const handleChange = (field, form, meta, event) => {
		field.onChange(event)
		onChange && onChange(event)
		if(meta.error) {
			form.validateField(field.name)
		}
	}

	const handleBlur = (field, form, event) => {
		field.onBlur(event)
		onBlur && onBlur(event)
		if(validateOnBlur) {
			form.validateField(field.name)
		}
	}

	return (
		<Field
			id={id}
			name={name}
			onChange={onChange}
			onBlur={onBlur}
			validate={validate}>
			{({ field, form, meta })=> {
				return (
					<>
						<InputLabelStyled withError={!!meta.error} htmlFor={name}> {label} </InputLabelStyled>
						<InputStyled withError={!!meta.error}>
							<input
								{...field}
								onChange={(event) => handleChange(field, form, meta, event)}
								onBlur={(event) => handleBlur(field, form, event)}
							/>
							{meta.touched && meta.error && (
								<ErrorMessageStyled className="error">{meta.error}</ErrorMessageStyled>
							)}
						</InputStyled>
					</>
				)
				}}
		</Field>

	)
}