import * as React from "react"


import "./layout.css"

const Layout = ({ children }) => (
  <div style={{ margin: '0 auto', maxWidth: 800, padding: '0 1rem' }}>
    {children}
  </div>
);


export default Layout
