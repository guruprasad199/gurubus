import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link , Routes} from 'react-router-dom';import Home from "./HomePage/Home";
import Book from "./Booking/Book"

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/easybook" element={<Book/>} />
    </Routes>
    </Router>
  </>
  );
}

export default App;


