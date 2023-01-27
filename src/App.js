import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link , Routes} from 'react-router-dom';import Home from "./HomePage/Home";
import Book from "./Booking/Book"
import PassangerDetail from './TravelsDetails/PassangerDetail'

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/easybook" element={<Book/>} />
    <Route path="/detail" element={<PassangerDetail />} />
    </Routes>
    </Router>
  </>
  );
}

export default App;


