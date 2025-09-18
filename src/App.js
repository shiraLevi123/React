import './App.css';
import Header from './Components/Header';
import Page from './Components/Page';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';
import ContentArea from './Components/ContentArea';
import About from './Components/About';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Header />
      {/* <Page /> */}
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/side-bar" element={<SideBar />} />
          <Route path="/about" element={<About />} />
          <Route path="/content-area" element={<ContentArea />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
