import { h } from 'preact';
import List from 'preact-material-components/List';
import { route } from 'preact-router';

const settingItems = [
    { text: 'Change Time', link: 'change-time' },
    { text: 'Change Date', link: 'change-date' },
    { text: 'Change Password', link: 'change-pass' },
    { text: 'Edit Main Header', link: 'edit-main' },
    { text: 'Edit Footer', link: 'edit-footer' },
    { text: 'Change Paper cutting', link: 'change-cutting' },
    { text: 'Set first token number', link: 'set-first' },
];

const SettingsList = () => {
    return (
        <div>
            <List>
                {settingItems.map(item => (
                    <>
                        <List.Item onClick={e => route(`/${item.link}`)}>
                            {item.text}
                        </List.Item>
                        <List.Divider />
                    </>
                ))}
            </List>
        </div>
    );
};

export default SettingsList;
