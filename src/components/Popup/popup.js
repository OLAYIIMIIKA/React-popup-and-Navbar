import React from 'react'
import './popup.css';


// The {props.children} i used in the code was made possible by special Prop in react called "Children"
// if i pass any content in the Popup tag in App.js it will be automatically rendered here 
function Popup (props) {
return (props.trigger) ? (
    <div className="popup">
       <div className="popup-alert">
       <button className="close-btn" onClick={() => props.setTrigger(false)}>&times;</button>
       {props.children}
       </div>
    </div>
  ) : "";
}

export default Popup