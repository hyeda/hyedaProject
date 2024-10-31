import React from "react"

const CustomButton = (props) => {
    const {color, onClick, children} = props; // 
  
    if (color) {
      return (
        <button 
          style={{background: color, color: "white"}}
          onClick={onClick}
        >
          {children}
        </button>
      )
    }
  };

  export default CustomButton;