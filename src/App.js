import React from 'react'
import Card from './Card'
import CardwAxios from './CardwAxios'

export default function App() {
  // let a= fetch("https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=69a067a3606d0a24c34c8d629ac33838&units=metric")
  // a.then((value1)=>{
  //   console.log(value1.status)
  //   console.log(value1.ok)
  //   return value1.json();
  // }).then((value2)=>{
  //   console.log(value2)
  // })
  return (
    <div>
     <CardwAxios />
    </div>
  )
}


