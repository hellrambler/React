import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import FoodSearch from './FoodSearch';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<FoodSearch />} />
        <Route exact path="/:name" element={<Book />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

function Error() {
  return (
    <h1> Page Not Found! </h1>
  )
}

function Book() {
  let { name } = useParams();
  return (
    <div>
      <h1>I am reading {name}</h1>
    </div>
  );
}

export default App;
