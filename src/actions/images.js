import request from "superagent"
const baseUrl = "http://localhost:4000"

export const ALL_IMAGES = "ALL_IMAGES"
export const NEW_IMAGE = "NEW_IMAGE"

export const getImages = () => (dispatch, getState) => {
  if (getState().images.length) {
    return
  }

  request(`${baseUrl}/image`)
    .then(res => {
      dispatch({
        type: ALL_IMAGES,
        payload: res.body,
      })
    })
    .catch(console.error)
}

export const createImage = data => dispatch => {
  console.log("Data:", data)
  request.post(`${baseUrl}/image`).send(data)
    .then(res => {
      dispatch({
        type: NEW_IMAGE,
        payload: res.body,
      })
    })
    .catch(console.error)
}