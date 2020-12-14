import React, { useState } from "react"
import { Container, TextField, Button } from "@material-ui/core"
import { Redirect } from "react-router-dom"
import { useDispatch } from "react-redux"

import fetchCall from "../utils"

import { login } from "../redux/actions"

const Signin = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [success, setSuccess] = useState(false)

	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = await fetchCall("signin", "POST", null, {
			email,
			password,
		})
		if (data.status === "success") {
			dispatch(login(data.payload))
			setSuccess(true)
		}
	}

	if (success) {
		return <Redirect to="/home" />
	}

	return (
		<Container>
			<form onSubmit={(e) => handleSubmit(e)}>
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

export default Signin
