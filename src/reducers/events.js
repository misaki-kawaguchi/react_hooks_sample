import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from "../actions"
// state：未定義の場合もあるので初期化しておく
// action：actionにはtypeという属性が渡ってくる
// action = {type: 'CREATE_EVENT', title: '2020年東京オリンピックのお知らせ', body: '202年に東京オリンピックを開催します！つきましては....'}
const events = (state = [], action) => {
  console.log(state)
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      // eventsの最後にeventを追加する
      return [...state, { id, ...event }]
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.id)
    case DELETE_ALL_EVENTS:
      return []
    default:
      return state
  }
}

export default events
