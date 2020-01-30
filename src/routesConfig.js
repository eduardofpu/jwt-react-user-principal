import Home from "./page/home/Home";
import UserEdit from "./page/user/editar-contato";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";


const routesConfig = [
    {
        path:"/",
        component: Home,
        exact:true  
    },
    {
        path:"/userEdit",
        component: UserEdit,
        exact:true  
    },
    {
        path:"/SignUp",
        component: SignUp,
        exact:true
    },   
    {
        path:"/SignIn",
        component: SignIn,
        exact:true
    }    
    
]

export default routesConfig
