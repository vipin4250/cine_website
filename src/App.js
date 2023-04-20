import './App.css';
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  return (
    <>
    <div className="_1">
      {/* logo content  */}
      <span className="_1_1">
      <strong>CINE COUNCELLOR</strong>
      </span>

      {/* login */}
      <span className="_1_2">
      <a className="btn btn-warning _1_2_1" href="/" role="button">Login</a>
      </span>
{/* ---------------------links */}
    </div>
    <div className="_2">
      <ul className="_2_1">
        <div className="_2_1_1">
          <li><a className="btn btn-warning _2_1_1_1" href="/" role="button">Analyzer Dashboard</a></li>
          <li><a className="btn btn-warning _2_1_1_1" href="/" role="button">Recommendation</a></li>
          <li><a className="btn btn-warning _2_1_1_1" href="/" role="button">Database</a></li>
          <li><a className="btn btn-warning _2_1_1_1" href="/" role="button">Ranking</a></li>
          <li><a className="btn btn-warning _2_1_1_1 _2_1_1_2" href="/" role="button">Feedback</a></li>
          {/* combine contact us and about us into HELP */}
          <li><a className="btn btn-warning _2_1_1_1 _2_1_1_2" href="/" role="button">Contact Us</a></li>
          <li><a className="btn btn-warning _2_1_1_1 _2_1_1_2" href="/" role="button">About Us</a></li>
        </div>
      </ul>
    </div>
    </>
  );
}

export default App;
