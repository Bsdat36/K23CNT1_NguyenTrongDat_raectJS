import React, { Component } from 'react'
import NtdFuncCompEvent1 from './components/NtdFuncCompEvent1';
import NtdClassCompEvent1 from './components/NtdClassCompEvent1';
import NtdFuncCompEventProps from './components/NtdFuncCompEventProps';
import NtdClassCompEventProps from './components/NtdClassCompEventProps';
import NtdClassCompEventState from './components/NtdClassCompEventState';
import NtdClassComEventPostData from './components/NtdClassComEventPostData';
 class NtdApp extends Component {

    //Hàm xử lý sự kiện khi component con chuyển dữ liệu lên
    ntdHandleDataToApp = (content)=>{
        alert(content);
    }
  render() {
    return (
      <div className='container border mt-3'>
            <h1 className='text-center alert alert-info my-2'>K23CNT1 - Nguyễn Trọng Đạt - Event and Form</h1>
            <hr/>
            <div>
                <h2>Function Component - Event</h2>
                <NtdFuncCompEvent1/>
            </div>
            <hr/>
            <div>
                <h2>Class Component - Event</h2>
                <NtdClassCompEvent1/>
            </div>
            <hr/>
            <div>
                <h2>Function Component - Event; this.props</h2>
                <NtdFuncCompEventProps ntdRenderName="Nguyễn Trọng Đạt" />
            </div>
            <hr/>
            <div>
                <h2>Class Component - Event; props</h2>
                <NtdClassCompEventProps ntdRenderTitle = "Welcome to Đạt"/>
            </div>
            <div>
                <h2>Class Component - Event; state</h2>
                <NtdClassCompEventState/>
            </div>
            <div>
            <h2>Class Component - Event; Post Data to App</h2>
            <NtdClassComEventPostData onNtdDataToApp={this.ntdHandleDataToApp}/>
            </div>
      </div>
    );
  }
}
export default NtdApp; 
