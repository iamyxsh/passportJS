import React from "react"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from "./components/HomePage"
import Signin from "./components/Signin"
import Dashboard from "./components/Dashboard"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signin" component={Signin} />
				<Route exact path="/home" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
