import UserNavbar from "@/component/UserNavbar";
import { Children } from "react";

const userpage=({children})=>{
    return(
        <div>
           <UserNavbar />
           {children}
        </div>
    )
}

export default userpage;