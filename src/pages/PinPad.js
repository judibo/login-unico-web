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
		const shuffleArray = Array(5)
			.fill()
			.map(() =>
				Array(2)
					.fill()
					.map(() => Math.floor(Math.random() * 10))
			)

		setRandomArray(shuffleArray)
		// setRandomArray(
		// 	shuffle([
		// 		[1, 2],
		// 		[3, 4],
		// 		[5, 6],
		// 		[7, 8],
		// 		[9, 0]
		// 	])
		// )
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
