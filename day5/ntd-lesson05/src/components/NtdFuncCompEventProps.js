import React from 'react'

export default function NtdFuncCompEventProps(props) {
    //Hàm xử lý sự kiện
    const ntdHanldeButtonClick1 = ()=>{
        alert("Dữ liệu từ props:" + props.ntdRenderName);
        console.log("Xin chao:",props.ntdRenderName);
    }
    const ntdHanldeButtonClick2 = (param)=>{
        //Lấy dữ liệu từ propsprops
        alert("Dữ liệu từ props (Button 2 clickclick):" + props.ntdRenderName);
        //Dữ liệu từ tham sốsố
        console.log("Hi:",param);
    }
  return (
    <div className="alert alert-info">
        <button className='btn btn-primary mx-1'
            onClick={ntdHanldeButtonClick1}>Button1</button>
        <button className='btn btn-success mx-1'
        onClick={ntdHanldeButtonClick2("Button 2")}>Button2</button>
    </div>
  )
}

