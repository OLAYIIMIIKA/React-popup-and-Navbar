import Popup from "./components/Popup/popup";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";



function App() {
  //This useState function handles the button Popup when clicked on the Open popup button 
  //and the timer when the Page is refreshed 
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  

  // this useEffect function handling the timer 
 useEffect (() =>{
   setTimeout(() => {
     setTimedPopup(true)
   },4000)
 }, []);

  return (
    <div className="App">
      <Navbar/>
      <main>
            <h1>React Popups</h1>
            <p>Welcome to OLAYIIMIIKA Dev community, 
              We're here to introduce you to a world of possibilities and excellence. 
              Our commitment to quality and customer satisfaction is unmatched.</p>
            <br></br>
            <button className="openModalBtn" onClick={() => setButtonPopup(true)}>Open Popup</button>
        </main>
     
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
              {/* anything i write here will replace my {Children.props} in my Popup.js componenet  */}
              <h1>
                We welcome you new user  😊
              </h1>
              <div className="Paragraph">
                <p>The next page is awesome! You should move to the next page for some unforgetable experience </p>
              </div>
              <div className="footer">
                <button id="cancel-btn" onClick={() => setButtonPopup(false)}>Cancel</button>
                <button >Continue</button>
              </div>
            </Popup>


       {/* this is the popup timer section */}
            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
               {/* anything i write here will replace my {Children.props} in my Popup.js componenet  */}
            <h1>
                We welcome you new user  😊
              </h1>
              <div className="Paragraph">
                <p>The next page is awesome! You should move to the next page for some unforgetable experience </p>
              </div>
              <div className="footer">
                <button id="cancel-btn" >Cancel</button>
                <button >Continue</button>
              </div>
            </Popup>
    </div>
  );
}

export default App;
