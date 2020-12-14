import React, { useState } from "react"
import { Container, TextField, Button } from "@material-ui/core"

import fetchCall from "../utils"
import { Redirect } from "react-router-dom"

const HomePage = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [success, setSuccess] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = await fetchCall("signup", "POST", null, {
			name,
			email,
			password,
		})
		if (data.status === "success") {
			setSuccess(true)
		}
	}

	if (success) {
		return <Redirect to="/signin" />
	}

	return (
		<Container>
			<form onSubmit={(e) => handleSubmit(e)}>
				<TextField
					value={name}
					onChange={(e) => setName(e.target.value)}
					label="Name"
				/>
				<TextField
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label="Email"
					type="email"
				/>
				<TextField
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label="Password"
					type="password"
				/>
				<Button variant="contained" color="primary" type="submit">
					Submit
				</Button>
			</form>
		</Container>
	)
}

export default HomePage
