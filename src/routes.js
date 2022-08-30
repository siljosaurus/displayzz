import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Film from './components/film'
import Overview from './components/overview'
import Detail from './components/detail'


export default function Navigation() {
    return(
        <Routes>
            <Route
                path="/"
                element={<App/>}>
            </Route>
           
            <Route
                path="/timelapse"
                element={<Film/>}>
            </Route>
            <Route
                path="/overview"
                element={<Overview/>}>
            </Route>

            <Route
                path="/detail"
                element={<Detail/>}>
            </Route>
        </Routes>
    )
}