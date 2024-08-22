export const msalConfig = {
  auth: {
    clientId: "<78237340-7340-4148-93b7-ccd54b34dc56>",
    authority: "https://<safezoneprojectoutlook>.b2clogin.com/<safezoneprojectoutlook>.onmicrosoft.com/B2C_1_signupsignin",
    knownAuthorities: ["<safezoneprojectoutlook>.b2clogin.com"],
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "http://localhost:3000",
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "User.Read"],
};
