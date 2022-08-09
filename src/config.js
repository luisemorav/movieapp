export const api = {
    url: "https://www.omdbapi.com",
    key: "8baf1935", // la que tienen cada uno
  };
  
  export const authUsers = [
    {
      id: "1000",
      username: "admin",
      name: "Admin",
      pass: "1234",
    },
    {
      id: "1001",
      username: "luis",
      name: "Luis Mora",
      pass: "1234",
    },
    {
      id: "1002",
      username: "bruno",
      name: "Profe Bruno",
      pass: "1234",
    },
  ];
  
  const Config = {
    api,
    authUsers,
  };
  
  export default Config;
  