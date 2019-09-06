import React from "react"
import ImageList from "./components/ImageList"
import CreateForm from "./components/CreateForm"

class App extends React.Component {
  render() {
    return (
      <div>
        <ImageList />
        <CreateForm />
      </div>
    )
  }
}

export default App