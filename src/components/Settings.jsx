import { h } from 'preact';
import TextField from 'preact-material-components/TextField';
import Fab from 'preact-material-components/Fab';
import SaveIcon from '../assets/icos/save.svg';

const inputTypes = {
    'change-time': {
        type: 'time',
        label: 'Change Time',
    },
    'change-date': {
        type: 'date',
        label: 'Change Date',
    },
    'change-pass': {
        type: 'password',
        label: 'Change Password',
    },
    'edit-main': {
        type: 'text',
        label: 'Chagne main header',
    },
    'edit-footer': {
        type: 'text',
        label: 'Change footer',
    },
    'change-cutting': {
        type: 'number',
        label: 'Change cutting',
    },
    'set-first': {
        type: 'number',
        label: 'Set first token',
    },
};

const Settings = ({ setting }) => {
    const settingsInput = inputTypes[setting];
    return (
        <div className="settings-page">
            <TextField
                outlined
                label={settingsInput.label}
                type={settingsInput.type}
            />

            <Fab ripple={true} className="fab-save">
                <img src={SaveIcon} alt="Save" />
            </Fab>
        </div>
    );
};

export default Settings;
