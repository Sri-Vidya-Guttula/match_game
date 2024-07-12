import './index.css'
import {Component} from 'react'

class Navbar extends Component {
  render() {
    const {score} = this.props
    const {time} = this.props
    // console.log(score)
    return (
      <>
        <li className="nav-list">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="navbar-img"
          />
        </li>
        <li className="nav-list">
          <div className="no-container">
            <p className="score-container">
              Score:
              <span className="score-no">{score}</span>
            </p>

            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-img"
              />
              <p className="time-no">{time} sec</p>
            </div>
          </div>
        </li>
      </>
    )
  }
}

export default Navbar
