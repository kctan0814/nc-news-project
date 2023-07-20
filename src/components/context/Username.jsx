import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = props => {
  const [username, setUsername] = useState('tickle122');
  return <UserContext.Provider value={({ username, setUsername})} >
    { props.children }
  </UserContext.Provider>
}