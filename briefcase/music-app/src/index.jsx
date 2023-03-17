/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import Routes from './components/Routes/Routes'
import * as S from './styles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <S.GlobalStyle />
                <Routes />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
