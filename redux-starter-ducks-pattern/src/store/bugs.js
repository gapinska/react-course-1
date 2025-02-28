//action types
const BUG_ADDED = 'bugAdded'
const BUG_REMOVED = 'bugRemoved'
const BUG_RESOLVED = 'bugResolved'

//actions
export const bugAdded = (description) => ({
	type: BUG_ADDED,
	payload: {
		description
	}
})

export const bugRemoved = (id) => ({
	type: BUG_REMOVED,
	payload: {
		id
	}
})

export const bugResolved = (id) => ({
	type: BUG_RESOLVED,
	payload: {
		id
	}
})

//reducer
let lastId = 0

export default function reducer(state = [], action) {
	switch (action.type) {
		case actions.BUG_ADDED:
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					resolved: false
				}
			]
		case actions.BUG_REMOVED:
			return state.filter((bug) => bug.id !== action.payload.id)

		case actions.BUG_RESOLVED:
			return state.map((bug) => (bug.id === action.payload.id ? { ...bug, resolved: true } : bug))
		default:
			return state
	}
}
