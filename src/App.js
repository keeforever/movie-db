import Home from "./components/Home";
import { BrowserRouter as Router} from "react-router-dom";
import {AppProvider} from './context'
function App() {
  
  return (
    <AppProvider>
      <Router>
        <main>
          <Home/>
        </main>
      </Router>
    </AppProvider>

  );
}

export default App;
