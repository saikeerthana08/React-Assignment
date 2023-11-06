import React from 'react'

const Context = React.createContext({
  state = {cartCount: null},
})

export default Context
