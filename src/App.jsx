import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './components/UserList'
import { AddUser } from './components/AddUser'


function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Karine", surname: "Hakobyan", age: 23, email: "karine@gmail.com", password: " 88239402" },
    { id: 2, name: "Anna", surname: "Anyan", age: 34, email: "anna@gmail.com", password: " 45239012" },
    { id: 3, name: "Narek", surname: "Karapetyan", age: 17, email: "narek@gmail.com", password: " 23525672" },
    { id: 4, name: "Tigran", surname: "Tigranyan", age: 41, email: "tigran@gmail.com", password: " 30123544" },
    { id: 5, name: "Nare", surname: "Minasyan", age: 21, email: "nare@gmail.com", password: " 45789443" },

  ])

  const handleAddUser = (data) => {
    setUsers([...users, { ...data, id: Date.now() }])
  }

  const handleRemoveUser = (id) => {
    setUsers([...users.filter(user => user.id !== id)])
  }

  return (
    <>
      <AddUser
        onAdd={handleAddUser}
      />
      <UserList
        users={users}
        onRemove={handleRemoveUser}
      />
    </>
  )
}

export default App
