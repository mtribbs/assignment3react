import Home from './components/Home';
import Menu from './components/Menu';
import Form from './components/Form';

import "./index.css";

function App() {
  return (
    <div className="container">
      <Menu></Menu>
      <div className="main">
      <Home></Home>
      <Form></Form>
      </div>
    </div>
  );
}

export default App;
