import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import IconShop from '@material-ui/icons/AddShoppingCart';
import './style.scss';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

function BuyCoins() {
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };

        return (
          <React.Fragment>
            <Button
              variant="contained"
              className="btn-comprar"
              aria-owns={open ? 'render-props-menu' : undefined}
              aria-haspopup="true"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            >
              Créditos<IconShop className="icon-cart"/>
            </Button>
            <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Comprar + R$10</MenuItem>
              <MenuItem onClick={handleClose}>Comprar + R$30</MenuItem>
              <MenuItem onClick={handleClose}>Comprar + R$50</MenuItem>
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

export default BuyCoins;