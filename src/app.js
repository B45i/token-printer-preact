import { h } from 'preact';
import { Router } from 'preact-router';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import SettingsList from './components/SettingsList';

const App = () => (
    <div id="app">
        {/* <Navbar /> */}
        <Router>
            <Settings path="/:setting" />
            <SettingsList path="/" />
        </Router>
    </div>
);

export default App;
