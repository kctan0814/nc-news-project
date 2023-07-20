import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = props => {
  const [username, setUsername] = useState('tickle122');
  const [currTopic, setCurrTopic] = useState(undefined)
  return <UserContext.Provider value={({ username, setUsername, currTopic, setCurrTopic})} >
    { props.children }
  </UserContext.Provider>
}