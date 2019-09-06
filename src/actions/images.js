import request from "superagent"
const baseUrl = "https://vast-escarpment-21536.herokuapp.com"

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

export const createImage = data => (dispatch, getState) => {
  request.post(`${baseUrl}/image`)
    .set("Authorization", `Bearer ${getState().user}`)
    .send(data)
    .then(res => {
      dispatch({
        type: NEW_IMAGE,
        payload: res.body,
      })
    })
    .catch(console.error)
}