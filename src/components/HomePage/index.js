import {Component} from 'react'
import SideBar from '.components/SideBar'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './index.css'

class HomePage extends Component {
  state = {count: null, productsList: []}

  componentDidMount() {
    this.getprops()
  }

  getprops = async () => {
    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'
    const response = await fetch(url)
    const data = await response.json()
    const newData = data.categories
    console.log(newData)
  }

  render() {
    const {count, productsList} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">E-Commerce</h1>
        <div className="cart">
          <AiOutlineShoppingCart size="30" />
        </div>
        <div>
          <SideBar />
          <div>
            <AiOutlinePlusCircle />
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
