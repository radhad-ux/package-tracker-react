//NPM Packages
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

// Project files
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import ErrorScreen from "./screens/ErrorScreen";
import LoadedScreen from "./screens/LoadedScreen";
import LoadingScreen from "./screens/LoadingScreen";
import "./styles/style.css";

export default function App() {
  //Local state
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0);
  const endpoint = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  //Methods
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(endpoint);
      const json = await response.json();
      setData(json);
      setStatus(2);
    };
    fetchData().catch(console.error);
    setStatus(1);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Title />
        {status === 0 && <LoadingScreen />}
        {status === 1 && <ErrorScreen />}
        {status === 2 && <LoadedScreen data={data} />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
