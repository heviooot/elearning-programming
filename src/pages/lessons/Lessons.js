import React, { useEffect } from 'react'

// KOMPONEN INI BERFUNGSI UNTUK MEMBERIKAN WELCOME TO LESSON PAGE


const Lessons = ({setHideSidebar}) => {
    useEffect(() => {
      setHideSidebar(false)
    },[setHideSidebar])
    return (
        <div></div>
        
    )
}

export default Lessons
