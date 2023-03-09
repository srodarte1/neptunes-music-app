import React from 'react'
import {useState, useEffect, createContext } from 'react'
import {useNavigate} from 'react-router-dom'

const UserContext = createContext()

const UserProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [friends, setFriends] = useState(null)
  const navigate = useNavigate()


const authUser = () => {
  fetch("/authorized_user").then((res) => {
    if (res.status === 200) {
      res.json().then((user) => {
        setUser(user)
        return user
      });
    } else {
      setUser(null)
    }
  })
}



  const handleLogin = (e, loginFormData) => {
    e.preventDefault()
    
    // console.log(loginFormData)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginFormData)
    })
    .then(resp => {
      if (resp.status === 200) {
        resp.json().then(userObj => {
          setUser(userObj)
          
          alert("User successfully logged in!")
        })
        .then(() => navigate("/dashboard"))
      } else {
        resp.json().then(messageObj => alert(messageObj.error))
      }
      })
    }

    const handleDelete = (e) => {
      e.preventDefault()
     fetch(`/users/${user.id}`, {method: "DELETE"})
      .then(() => setUser(null))
      .then(() => navigate('/'))
      
    }
    const handleLogout = (e) => {
     fetch('/logout', {method: "DELETE"})
      .then(() => setUser(null))
      .then(() => navigate('/'))
      
    }

    const handleSignup = (event, newUser) => {
      event.preventDefault()
      fetch("/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(resp => {
            if (resp.status === 201) {
                resp.json().then(userObj => {
                  setUser(userObj)
                  // setMessage("User successfully logged in!")
                  
                }) 
                .then(() => navigate("/dashboard"))
            } else {
                resp.json().then(messageObj => alert(messageObj.message))
            }})
          }

          const handleUpdateUser = (updatedUser) => {
            const formData = new FormData()
            formData.append('avatar', updatedUser.avatar)
            // debugger
            formData.append('id', user.id) 
            fetch(`/users/${user.id}`, {
              method: 'PATCH',
              body: formData,
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                if (data.user) {
                  setUser(data.user); // update context state
                } else {
                  alert(data.errors);
                }
              });
          };
          // const handleUpdateUser = (updatedUser) => {
          //   fetch(`/users/${user.id}`, {
          //     method: 'PATCH',
          //     headers: {
          //       'Content-Type': 'application/json',
          //     },
          //     body: JSON.stringify(updatedUser),
          //   })
          //     .then((response) => {
          //       return response.json();
          //     })
          //     .then((data) => {
          //       if (data.user) {
          //         setUser(data.user); // update context state
          //       } else {
          //         alert(data.errors);
          //       }
          //     });
          // };
          




  return (
   <UserContext.Provider value={{ authUser, user, setUser, handleLogin, handleDelete, handleSignup, handleLogout, handleUpdateUser}}>
    {children}
   </UserContext.Provider>
  )
}

export {UserContext, UserProvider}