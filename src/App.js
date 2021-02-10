
import { Component } from 'react'
import './App.css'
import MyInfo from "./components/MyInfo"
import { Button } from 'react-bootstrap'



class App extends Component {

  state = {
    timer: 0,
    show: false
  }



  handleClickShow = () => {

    this.chrono = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1

      })
    }, 1000)

    this.setState({
      show: !this.state.show
    })

  }
  

  handleClickHide = () => {
    clearInterval(this.chrono)
    this.setState({
      show: !this.state.show
    })
    this.setState({
      timer: 0
    })
  }


  render() {
    return (
      <div className="App">

        {this.state.show === false ? <Button className="btn" variant="success" onClick={this.handleClickShow}>Show</Button> :
          <Button className="btn" variant="danger" onClick={this.handleClickHide}>Hide</Button>}
        <h1 style={{ color: "white" }}>Chrono {this.state.timer}</h1>
        {this.state.show && <MyInfo />}

      </div>
    );
  }
}

export default App;
