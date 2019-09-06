import { ALL_IMAGES, NEW_IMAGE } from "../actions/images"

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_IMAGES:
      return [...action.payload]
    case NEW_IMAGE:
      return [...state, action.payload]
    default:
      return state
  }
}