import React from 'react';

export const settings = {
    dev: {
      api_url: 'www.allocine-dev.co.nz',
      username: "bob",
      password: "Password123",
      background: 'yellow',
    },
    integration: {
        api_url: 'www.allocine-integration.co.nz',
        username: "frank",
        password: "Password123",
        background: 'green',
    },
    prod: {
        api_url: 'www.allocine-prod.co.nz',
        username: "bob",
        password: "Password123",
        background: 'blue',
    },
  };
  
  export const SettingsContext = React.createContext(
    settings.dev // default value
  );