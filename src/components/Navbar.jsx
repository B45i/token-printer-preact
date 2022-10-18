import { h } from 'preact';
import TopAppBar from 'preact-material-components/TopAppBar';

const Navbar = () => {
    return (
        <div>
            <TopAppBar className="topappbar">
                <TopAppBar.Row>
                    <TopAppBar.Section align-start>
                        <TopAppBar.Title>Token Settings</TopAppBar.Title>
                    </TopAppBar.Section>
                </TopAppBar.Row>
            </TopAppBar>
        </div>
    );
};

export default Navbar;
