import Structure from './Structure'
import "./CSS/Header.css"
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom";


const Header = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />}></Route>
        )
    )

    return (
        <>

            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
            <nav>
                <span className="name">Agichat</span>

                {/* need to make react router here and make a seperate component for things inside link-contianer*/}

                <Root />

                <span className="button-container">
                    <button className="sign-up">Sign Up</button>
                    <button className="login">Log In</button>
                </span>

            </nav>
            <Structure />
        </>
    )
}

const Root = () => {
    return (
        <>
            <span className="link-container" >

                <span className="router"><a href="">About Us</a></span>
                <span className="router"><a href="">Features</a></span>
                <span className="router"><a href="">Our Blog</a></span>
            </span>
        </>
    )
}

export default Header