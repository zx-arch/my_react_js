import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from '../src/components/Navbar';
import Service, {Desain, Pemasaran, Pengembangan} from './pages/Service';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/:id?" element={<Home />} />
          </Route>

          <Route path="/service/" element={<Service />}>
            <Route path="pengembangan" element={<Pengembangan />} />
            <Route path="desain" element={<Desain />} />
            <Route path="pemasaran" element={<Pemasaran />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />}></Route>

        </Routes>
      </div>
    </div>
  );
}
const NoMatch = () => <h2>Not Found</h2>;

export default App;
