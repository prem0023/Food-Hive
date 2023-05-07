import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Prem Kumar",
    email: "pkprem17a@gmail.com ",
  },
});

export default UserContext;
