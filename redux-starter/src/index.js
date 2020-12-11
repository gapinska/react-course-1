import store from './store'
import { bugAdded, bugRemoved, bugResolved } from './actions'

store.dispatch(bugAdded('Bug1'))
store.dispatch(bugAdded('Bug2'))
store.dispatch(bugAdded('Bug3'))

store.dispatch(bugRemoved(2))

console.log(store.getState())

store.dispatch(bugResolved(3))
console.log(store.getState())
