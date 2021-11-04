import logo from './logo.svg';
import './App.css';
import Index from './Views/Index';
import {
  BrowserRouter,
  Switch, 
  Route, 
  Routes
} from "react-router-dom"
import AuthorDetails from './Views/AuthorDetails';
import DeleteAuthor from './Views/DeleteAuthor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route exact path="/" element={< Index />} />
      </Routes>
      <Routes>
        <Route exact path="/author/:id/edit" element={< AuthorDetails type="edit" />} />
      </Routes>
      <Routes>
        <Route exact path="/author/:id" element={< AuthorDetails type="view" />} />
      </Routes>
      <Routes>
        <Route exact path="/author/:id/delete" element={< DeleteAuthor  />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
