import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <Router>
      <div>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="Metrics">Metrics</Link>
          </li>
          <li>
            <Link to="NewMetric">New Metric</Link>
          </li>
          <li>
            <Link to="GeneralConditions">General Conditions</Link>
          </li>
          <li>
            <Link to="AppUsers">Users</Link>
          </li>
        </ul>
      </div>
      <AppRouter />
    </Router>
  );
}

export default App;
