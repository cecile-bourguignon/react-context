import React, { button } from 'react';

import { SettingsContext } from './settings-context';

class SettingsList extends React.Component {
  render() {
    let props = this.props;
    let setting = this.context;
    return (
      <React.Fragment>
        <button 
           {...props}
           style={{backgroundColor: setting.background}}
            />
        <h1 style={{ background: setting.background }}>Environment</h1>
        <ul>
          <li> {setting.api_url} </li>
          <li> {setting.username} </li>
          <li> {setting.password} </li>
        </ul>
        </React.Fragment>
    );
  }
}
SettingsList.contextType = SettingsContext;

export default SettingsList;