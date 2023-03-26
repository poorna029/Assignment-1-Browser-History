import {Component} from 'react'
import './header.css'
import MainComponent from '../MainComponent/component'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {val: props.obj, key: ''}
  }

  fu = e => {
    const {key} = this.state
    const {obj} = this.props
    console.log(e.target.value)

    const lis = obj.filter(m =>
      m.title.toLowerCase().includes(key.toLowerCase()),
    )
    this.setState({val: lis, key: e.target.value})
  }

  f1 = f => {
    const {val} = this.state

    const list = val.filter(m => m.id !== f)

    this.setState({val: list})
  }

  render() {
    const {val} = this.state
    console.log(val)

    return (
      <div>
        <div className="star">
          <div className="major">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="image"
            />
            <div className="main1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search1"
              />
              <input
                type="search"
                placeholder="Search history"
                className="inp"
                onChange={this.fu}
              />
            </div>
          </div>
        </div>
        {val.length !== 0 ? (
          <ul className="items">
            {val.map(x => (
              <MainComponent obj={x} key={x.id} func={this.f1} />
            ))}
          </ul>
        ) : (
          <div className="history">
            <p className="text-4xl text-bold">There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}

export default Header
