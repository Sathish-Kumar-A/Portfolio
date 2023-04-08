import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useStore } from './hooks/context'
import { useLocation } from 'react-router-dom'
import { Author_NAME, Document_Titles } from './constants/common'

const Layout = ({ children }) => {
    const [{ colors }] = useStore();
    const location = useLocation();
    useEffect(() => {
        // console.log(location.pathname);
        document.title=(Document_Titles[location.pathname.split("/")[1]] || "") +Author_NAME
    },[location.pathname])
    // const { bgColor, textColor } = colors;
    // console.log({colors});
  return (
      <div className={`w-10/12 mx-auto`}>
          <Header />
          {children}
          {/* <Footer /> */}
      </div>
  )
}

export default Layout