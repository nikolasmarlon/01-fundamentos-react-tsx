
//importaçao do coração do react
import React from 'react'

// ReactDom é a integração do React com a DOM(Document Object Model(HTML))
import ReactDOM from 'react-dom/client'


import { App } from './App'


//Colocando o '!' para avisar ao typeScript que o elemento vai sempre existir 
ReactDOM.createRoot(document.getElementById('root')!).render(
  //componente interno do React
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
