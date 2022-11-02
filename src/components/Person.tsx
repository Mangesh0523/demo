import { useState,ChangeEvent }  from 'react';


export enum HairColor{ 
    blonde= "Your haircolor is blonde",
    brown=" cool haircolor its brown",
    black=" wow that is so cool",

 

}
 interface Props {
    // name?:string;  // for removing error from app.tsx to show passig value is optional by ?
    // age?:number;
    // email?:string;
    name:string; 
    age:number;
    email:string;    // we are not going to make it optional
    hairColor:HairColor;
 }

//  enum HairColor{ 
//     blonde= "Your hair color is blonde",
//     brown=" cool hair color its brown",
//     black=" wow that is so cool"

//  }

export const Person =(props:Props)=> {

    const [country, setcountry ]= useState<string | null >("")

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setcountry(e.target.value)

    // const hello=()=>{
    //     setcountry("Rahul")
    }
    
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    
      <input placeholder='write down your country' onChange={(handleChange)}/>
      {/* { <button onClick={()=>hello()}>update</button> */}
      {country}
    {HairColor.brown}
    </div>
  );
}

// export const Person =({name,age,email})=> {
//     return (
//       <div>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//         <h1>{email}</h1>                      other way to pass arguments
//       </div>
//     );
//   }


// there is also a another way if we wont define it as functional component

// import {FC} as React from 'react'; and make 
// export const Person:FC<Props>=({name,age,email})=>{
//     return (
//       <div>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//         <h1>{email}</h1>                      other way to pass arguments
//       </div>
//     );
//   }