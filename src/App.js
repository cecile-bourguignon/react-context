import {SettingsContext, settings} from './settings-context';
import SettingsList from './settings-list';

import React from 'react';

// An intermediate component that uses the SettingsList
function Toolbar(props) {
  return (
    <SettingsList onClick={props.changeSetting}>
      Change Environment
    </SettingsList>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: settings.dev,
    };

    this.toggleSettings = () => {
      this.setState(state => ({
        setting:
          state.setting === settings.dev
            ? settings.integration
            : settings.dev,
      }));
    };
  }

  render() {
    // The SettingsList button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <SettingsContext.Provider value={this.state.setting}>
          <Toolbar changeSetting={this.toggleSettings} />
        </SettingsContext.Provider>
      </div>
    );
  }
};

export default App;
