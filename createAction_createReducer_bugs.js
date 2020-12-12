import { createAction, createReducer } from '@reduxjs/toolkit'
let lastId = 0

export const bugAdded = createAction('bugAdded')
export const bugRemoved = createAction('bugRemoved')
export const bugResolved = createAction('bugResolved')

export default createReducer([], {
	[bugAdded.type]: (state, action) => {
		//state may be called bugs
		state.push({
			id: ++lastId,
			description: action.payload.description,
			resolved: false
		})
	},
	[bugResolved.type]: (state, action) => {
		const index = state.findIndex((bug) => bug.id === action.payload.id)
		state[index].resolved = true
	}
})
