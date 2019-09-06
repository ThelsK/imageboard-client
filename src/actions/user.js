import request from "superagent"
const baseUrl = "http://localhost:4000"

export const JWT = "JWT"

export const login = data => dispatch => {
  request.post(`${baseUrl}/login`).send(data)
    .then(res => {
      dispatch({
        type: JWT,
        payload: res.body.jwt,
      })
    })
    .catch(console.error)
}