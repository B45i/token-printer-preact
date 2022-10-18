import { h } from 'preact';
import TopAppBar from 'preact-material-components/TopAppBar';

const Navbar = () => {
    return (
        <TopAppBar className="topappbar">
            <TopAppBar.Row>
                <TopAppBar.Section align-start>
                    <TopAppBar.Title>Token Settings</TopAppBar.Title>
                </TopAppBar.Section>
            </TopAppBar.Row>
        </TopAppBar>
    );
};

export default Navbar;
