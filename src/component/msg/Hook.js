import React, { Component } from 'react'

class Hook extends Component {

     state = {
          loading: false
     }

     fetchData = () => {
          this.setState({loading:true});

          setTimeout(()=>{
               this.setState({loading:false});
          },3000);
     }
  
  
render() {
     const {loading} = this.state;
return (     
     
         <ul 
         onClick={this.fetchData}  
         >

         {loading && <i className="fa fa-refresh fa-spin"></i>}
         {loading && <span>  Utilizando o State Hook</span>}
         {!loading && <span>{ this.props.name }</span>}         
         </ul>
        
   );
  }
}

export default Hook;

