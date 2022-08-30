import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Timelapse from './components/timelapse'
import Kart from './components/kart'
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
                element={<Timelapse/>}>
            </Route>
            <Route
                path="/kart"
                element={<Kart/>}>
            </Route>

            <Route
                path="/detail"
                element={<Detail/>}>
            </Route>
        </Routes>
    )
}