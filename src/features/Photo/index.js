import { Link, Route, Routes } from "react-router-dom"
import MainPage from './pages/DashBoard'

function Photo(){
    return (
        <div>
            <li>
                <Link to='/home/mainpage'>Hieu</Link>
            </li>
            <Routes>
                <Route path ='/home/mainpage' element={<MainPage/>}/>
            </Routes>          
        </div>
    )
}
export default Photo