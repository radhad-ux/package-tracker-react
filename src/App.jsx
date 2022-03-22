//NPM Packages
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

// Project files
import Header from "./components/Header";
import Title from "./components/Title";
import ErrorPage from "./pages/ErrorPage";
import LoadedPage from "./pages/LoadedPage";
import LoadingPage from "./pages/LoadingPage";
import "./styles/style.css";

export default function App() {
  //Local state
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0);
  const endpoint = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  //Method
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
        {status === 0 && <LoadingPage />}
        {status === 1 && <ErrorPage />}
        {status === 2 && <LoadedPage data={data} />}
      </BrowserRouter>
    </div>
  );
}
