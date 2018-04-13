import Duck from 'extensible-duck'
import * as userApi from '../apis/user'

export default new Duck({
  namespace: 'scrum-retro',
  store: 'users',
  consts: { statuses: ['NEW', 'LOADING', 'READY', 'ERROR'] },
  types: [
    'FETCH',
    'FETCH_PENDING',
    'FETCH_FULFILLED',
    'FETCH_REJECTED'
  ],
  reducer: (state, action, { types, statuses, initialState }) => {
    switch (action.type) {
      case types.FETCH_PENDING:
        return { ...state, status: statuses.LOADING }
      case types.FETCH_REJECTED:
        return { ...state, status: statuses.ERROR }
      case types.FETCH_FULFILLED:
        return { ...state, entities: action.payload.data, status: statuses.READY }
      default:
        return state
    }
  },
  selectors: {
    root: state => state
  },
  creators: duck => ({
    fetchUsers: () => ({ type: duck.types.FETCH, payload: userApi.getUsers() })
  }),
  initialState: ({ statuses }) => ({
    status: statuses.NEW,
    entities: []
  })
})
