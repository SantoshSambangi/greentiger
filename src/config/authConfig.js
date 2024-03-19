// authConfig.js
export const msalConfig = {

    auth: {
      clientId: '1a481643-c0e8-4868-af29-d85ccf86a78b', // Replace with your Application (client) ID
      authority: 'https://login.microsoftonline.com/6acfae4b-86a7-4ec0-9b0d-6bb473d1ea5c', // Replace with your Directory (tenant) ID
      redirectUri: 'http://localhost:3000', // Your app's redirect URI
    },

    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: true,
    },
    
  };
  