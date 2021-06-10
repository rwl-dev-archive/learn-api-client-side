import React, { useState } from 'react'
import logo from './logo.svg'
import { appStyle, appHeaderStyle, appLogoStyle, appLinkStyle, buttonStyle } from './style/style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={appStyle}>
      <header className={appHeaderStyle}>
        <img src={logo} className={appLogoStyle} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button className={buttonStyle} type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={appLinkStyle}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={appLinkStyle}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
