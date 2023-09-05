import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Signup from "./Signup"; // You may implement this if needed
import Login from "./login";
import Profile from "./profile";
import Message from "./message"; // Import the Message component
import Logout from "./logout";

function App() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success", "error", etc.

  // Function to show a message
  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    // Automatically clear the message after a few seconds (if needed)
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000); // Clear after 5 seconds
  };

  return (
    <div className="App">
      {/* Display messages */}
      {message && <Message message={message} type={messageType} />}
      
      <Router>
        <Switch>
          <Route path="/login">
            <Login showMessage={showMessage} /> {/* Pass the showMessage function as a prop */}
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout}/>
          <Route path="/" exact render={() => <Login showMessage={showMessage} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
