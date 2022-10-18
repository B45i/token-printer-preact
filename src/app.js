import { h } from 'preact';
import { Router } from 'preact-router';
import Navbar from './components/Navbar';

const App = () => (
    <div id="app">
        <Navbar />
        <Router>{/* <Profile path="/profile/:user" /> */}</Router>
    </div>
);

export default App;
