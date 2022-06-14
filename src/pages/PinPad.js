import React, { useEffect, useState } from 'react'
import { Fab } from '@mui/material'
import { Backspace } from '@mui/icons-material'

export default function PinPad({ password, setPassword }) {
	const [randomArray, setRandomArray] = useState([])
	const addNumber = (value) => {
		if (password.length < 6) setPassword(password.concat([value]))
	}
	const removeNumber = (value) => {
		setPassword(password.slice(0, -1))
	}

	useEffect(() => {
		const randomArray = new Array(10)
			.fill()
			.map((a, i) => (a = i))
			.sort(() => Math.random() - 0.5)

		let twoNumbersArray = []

		while (randomArray.length) twoNumbersArray.push(randomArray.splice(0, 2))

		setRandomArray(twoNumbersArray)
	}, [])

	return (
		<>
			{randomArray.map((value, index) => (
				<Fab variant='contained' color='primary' onClick={() => addNumber(value)} key={`random-numpad-${index}`}>
					{value.join(',').replace(/,/g, ' ou ').split()}
				</Fab>
			))}
			<Fab variant='contained' onClick={removeNumber}>
				<Backspace />
			</Fab>
		</>
	)
}
