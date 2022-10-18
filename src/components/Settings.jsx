import { h } from 'preact';
import TextField from 'preact-material-components/TextField';
import Fab from 'preact-material-components/Fab';

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
                {/* <Icon>favorite_border</Icon> */}
                <svg
                    width="24"
                    height="24"
                    fill="#fff"
                    viewBox="-32 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m433.941 129.941-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z" />
                </svg>
            </Fab>
        </div>
    );
};

export default Settings;
