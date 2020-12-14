import { createStore } from "redux"

import reducer from "./mainReducer"

import { composeWithDevTools } from "redux-devtools-extension"

const user = {}

const store = createStore(reducer, user, composeWithDevTools())

export default store
