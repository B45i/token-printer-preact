import { h } from 'preact';
import { Router } from 'preact-router';
import Navbar from './components/Navbar';
import SettingsList from './components/SettingsList';

const App = () => (
    <div id="app">
        <Navbar />
        <Router>{/* <Profile path="/profile/:user" /> */}</Router>
        <Router>
            <SettingsList path="/" />
        </Router>
    </div>
);

export default App;
