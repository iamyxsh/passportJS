import React from "react"
import { Container, Typography, Button } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"

import fetchCall from "../utils"
import { updateNum } from "../redux/actions"

const Dashboard = () => {
	const num = useSelector((state) => state.user.num)
	const token = useSelector((state) => state.user.token)

	const dispatch = useDispatch()

	const handleChange = async (type) => {
		if (type === "inc") {
			const data = await fetchCall("inc", "POST", token, null)

			if (data.status === "success") {
				dispatch(updateNum(data.payload))
			}
		}
		if (type === "dec") {
			const data = await fetchCall("dec", "POST", token, null)

			if (data.status === "success") {
				dispatch(updateNum(data.payload))
			}
		}
	}

	return (
		<Container>
			<Typography variant="h1">{num}</Typography>
			<Button
				variant="contained"
				color="primary"
				onClick={() => handleChange("inc")}
			>
				Increment
			</Button>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => handleChange("dec")}
			>
				Decrement
			</Button>
		</Container>
	)
}

export default Dashboard
