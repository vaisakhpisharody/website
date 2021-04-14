import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Footer } from "./components/Footer.jsx";

// CSS Styling Imports
import "./styles/App.css";


function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div >
    );
}

export default App;
