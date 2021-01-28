import React from 'react'
import Sidebar from './Sidebar'
import useFetch from "./../../hooks/useFetch"

const Lessons = () => {
    const { data, isLoading, error } = useFetch("http://localhost:8000/lessons");
    return (
        <Sidebar lessons={data} isLoading={isLoading} error={error} />
        
    )
}

export default Lessons
