import React, { useEffect, useState } from 'react'

export default function () {
    const [users, setUsers] = useState([])


    const fetchData = ()=>{
        fetch("https://randomuser.me/api/?nat=us&results=9&page=1").then((response)=>{
            return response.json();
        }).then((response2)=>{
            console.log(response2.results)
            setUsers(response2.results); 
                       
        })
      
    }



    useEffect(()=>{
        fetchData();
    },[])

    

  return (
    <div className='row'>
        {users.map(dataa =>(
            <div>
                {dataa.gender} {dataa.name.first} {dataa.location.state} {dataa.email}  {dataa.login.username} 
            </div>

            // <div>{dataa.phone}</div>
           
        ))}
        
    </div>
  )
}
