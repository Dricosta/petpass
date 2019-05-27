import React, { Component} from 'react';
import IconShop from '@material-ui/icons/AddShoppingCart';
import './style.scss'


class BuyCoins extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    return this.setState(state => ({
      open: !state.open
    }))
  }

render(){
    return (
      <button className={`btnCreditos ${this.state.open ? 'open' : 'close'}`} onClick={this.handleOpen} >
        Créditos<IconShop className="btnCreditos_icon" />
          <div className={`btnCreditos_dropdown_option option_login ${this.state.menuOptionLogin ? 'openOptionLogin' : ''}`}>
            <ul className="btnCreditos_dropdown_list">
              <li className="btnCreditos_dropdown_list-item submenu" onClick={this.props.handleAddDez}>Comprar + 10R$</li>
              <li className="btnCreditos_dropdown_list-item submenu" onClick={this.props.handleAddTrinta}>Comprar + 30R$</li>
              <li className="btnCreditos_dropdown_list-item submenu" onClick={this.props.handleAddCinquenta}>Comprar + 50R$</li>
            </ul>
          </div>
      </button>
    )
  }
}

export default BuyCoins; 