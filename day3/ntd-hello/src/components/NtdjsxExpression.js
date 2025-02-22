import React from 'react'

export default function NtdjsxExpression() {
    // biến
    const name="Nguyễn Trọng Đạt";

    const user ={
        firstName:"Nguyễn",
       lastName:"Đạt"
    }
    //hàm
    const fullName=(user)=>{
        return user.firstName + ' ' + user.lastName ;
    } 

    //elament
    const elament =(
        <div>
            {/* Biểu thức jsx */}
           <h2> {fullName(user)} </h2>
            <hr/>
            <h3> Welcome to {name}</h3>
        </div>
    );

    //hàm
    const sayWelcome = (name)=>{
        if(name){
           return <h3> Welcome to {name}</h3>
        }else{
            return <h3>Welcome to PUBG MOBILE: 亗bʂđạtツ</h3>
        }
    }
  return (
    <div>
        <h1> NTD - JSX Expression</h1>
        {elament}

        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome ("Free Fire: I〄ᴬm〄đạՇ☦")}
    </div>
  )
}