import React from 'react';
const Button = props => {
  const {recenterMyMap, mapCenter, ...other } = props;
  return <button  id="btnRecenter"
          {...other}
          style={{
              backgroundColor:`#fff`,
              border: `2px solid #fff`,
              borderRadius: `3px`,
              cursor: `pointer`,
              boxShadow: `0 2px 6px rgba(0,0,0,.3)`,
              color: `black`,
              fontFamily:`Roboto,Arial,sans-serif`,
              padding: `0px 4px`,
              margin: `7px`,
              lineHeight: `24px`,
              position: `absolute`,
              left: `110px`,
              top: `3px`,
          }}
      />

};

export default Button
