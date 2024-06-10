import logo from "./logo.jpg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/app/chat/:userType/:roomId/:chatType/:linkType"
          element={<HandleDeepLink />}
        />
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};
const HandleDeepLink = () => {
  // const history = useNavigate();
  const { userType, roomId, chatType, linkType } = useParams();
  console.log("path segment", userType, roomId, chatType, linkType);

  useEffect(() => {
    // const apiUrl = `www.heroku123.com/redirect1/${pathSegments}`;
    // const pathSegments = `${userType}/${roomId}/${chatType}/${linkType}`;
    const apiUrl = `https://bableon-django-1193e2d277c3.herokuapp.com/chat/redirect1`;

    axios
      .get(apiUrl)
      .then((response) => {
        // const redirectUrl = response.data.redirectUrl;
        // window.location.href = redirectUrl;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [userType, roomId, chatType, linkType]);

  return <div>Redirecting...</div>;
};
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};
export default App;
