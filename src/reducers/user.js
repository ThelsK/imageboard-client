import { JWT } from "../actions/user"

export default function (state = null, action = {}) {
  switch (action.type) {
    case JWT:
      return action.payload
    default:
      return state
  }
}