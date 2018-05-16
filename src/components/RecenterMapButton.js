import React from 'react';
const Button = props => {
  const {recenterMyMap, mapCenter, ...other } = props;
  return <button  id="btnRecenter"
          {...other}
      />

};

export default Button
