import { Route, Routes } from "react-router-dom";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
export default function Routing(){
    return(
        <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}