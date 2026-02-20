import { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <div>
      {isLoggedIn ? (
        <Profile setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
