import {HashRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Load from './Load'

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Load />}/>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </HashRouter>
    )
}