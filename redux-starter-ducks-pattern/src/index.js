import configureStore from './store/confugureStore'
import { bugAdded, bugRemoved, bugResolved } from './store/bugs'

const store = configureStore()

store.dispatch(bugAdded('Bug1'))
store.dispatch(bugAdded('Bug2'))
store.dispatch(bugAdded('Bug3'))

store.dispatch(bugRemoved(2))

console.log(store.getState())

store.dispatch(bugResolved(3))
console.log(store.getState())
