import React,{ Component } from 'react'
import { Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './App.css'
import routesConfig from './routesConfig';
import imgReact from'./imgs/react.png'
import imgNode from'./imgs/nodejs.png'
import { isAuthenticated, logout, getUserType } from './services/auth';

const userPrincipal= false
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);


class App extends Component {  


  getPrincipal = () => getUserType() === 'admin' ? 'Edit' : ''

  handleLogout = e => {
    e.preventDefault();
    logout(); 
    this.props.history.push("/SignIn"); 
  };
  
  render() {
    return (
    <div> 
              

        <div className="App">
        <div className="img-node"> <img src={imgNode} alt="imgNode"/></div><div></div>
              
              <Link to="/">Home</Link>                                  
              <PrivateRoute><Link to="/userEdit"><i>{this.getPrincipal()}</i> </Link></PrivateRoute>
              <PrivateRoute><Link to="#" onClick={this.handleLogout}><i>{isAuthenticated() ? 'Sair' : ' Entrar'}</i></Link></PrivateRoute>             
             
              <div className="img-react"> <i><img src={imgReact} alt="imgReact"/>  </i></div>  
                             
        </div>
        {routesConfig.map((value,key)=>{
          return <Route 
            key={key} 
            path={value.path} 
            component={value.component} 
            exact={value.exact}></Route>
        })}
     </div>    
    );
 
  }
}

export default withRouter(App);
