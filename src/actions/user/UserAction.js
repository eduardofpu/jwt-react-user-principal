import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_USERS 

export const getContato = () => {

    axios(baseUrl).then(json => {              
       console.log("getContato: ",json.data)                  
    })
}
 
export const submitUserAction = (data) => {  
    // event.preventDefault ();  
    let url = "http://localhost:3001/users"
    fetch(baseUrl,{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
       
    }) .then(Response => Response.json())
    .then(json => {
        console.log(json) 
        
     })
}

export const updateAction = (id,data) => {    
   
    fetch(`${baseUrl}/v1/edit/${id}`,{
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
       
    }) .then(Response => Response.json())
    .then(json => {
        console.log(json)  
            
    })
}
