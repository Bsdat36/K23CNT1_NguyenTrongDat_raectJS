import React from 'react';

export default function NtdFuncCompEvent1() {
    //Hàm  xử lí xử kiện
    const ntdEventButton1Click = () => {
        alert("Button 1 - Clicked");
    };
    const ntdEventButton2Click = () => {
        alert("Button 2 - Clicked");
    };
    const ntdEventButton3Click = (name)=>{
        alert("Name:"+name)
    }
    
    
    return (
        <div className='alert alert-info'>
           <button className='btn btn-primary mx-1' onClick={ntdEventButton1Click()}>
            Button1
            </button>
            <button className='btn btn-success mx-1' onClick={ntdEventButton2Click}>
            Button2
            </button>
            {/*<button className='btn btn-success' onClick={ntdEventButton3Click("Trọng Đạt")}>
            Button3
            </button>*/}
            <button className='btn btn-success mx-1' onClick={()=>ntdEventButton3Click("Nguyễn Trọng Đạt")}>
            Button4
            </button>
        </div>
    );
};
