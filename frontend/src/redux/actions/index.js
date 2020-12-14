export const login = (user) => ({
	type: "USER_LOGIN_SUCCESS",
	payload: user,
})

export const updateNum = (number) => ({
	type: "UPDATE_NUM",
	payload: number,
})
