import React, { useEffect, useState } from 'react'
import { Fab } from '@mui/material'
import { Backspace } from '@mui/icons-material'

export default function PinPad({pin, setPin}) {
	const [randomArray, setRandomArray] = useState([])

	const addNumber = (value) => {
		setPin(pin.concat(value))
		// onChange(pin)
	}
	const removeNumber = (value) => {
		setPin(pin.slice(0, -3))
	}

	const shuffle = (array) => {
		const newArray = [...array]
		let currentIndex = newArray.length - 1

		while (currentIndex > 0) {
			const randomIndex = Math.floor(Math.random() * currentIndex)
			const temp = newArray[currentIndex]
			newArray[currentIndex] = newArray[randomIndex]
			newArray[randomIndex] = temp
			currentIndex -= 1
		}
		return newArray
	}

	useEffect(() => {
		setRandomArray(
			shuffle([
				[1, 2],
				[3, 4],
				[5, 6],
				[7, 8],
				[9, 0]
			])
		)
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
