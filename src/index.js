import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/frontend">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#003791',
              colorError: '#FF4B5F',
              colorErrorBg: '#FF4B5F',
              colorErrorBorder: '#FF4B5F',
            },
          }}
        >
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
