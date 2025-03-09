import React, { Component } from 'react'

class NtdClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            ntdFullName:"Nguyễn Trọng Đạt",
            ntdAge:21,
        }
    }

    // Hàm xử lý sự kiện
    ntdEventHandleClick1 = ()=>{
        // Lấy dữ liệu trong state
        alert("FullName: " +this.state.ntdFullName + "\n Age:" + this.state.tvcAge);
    }
  render() {
    return (
      <div className='alert alert-danger'>
            <button className='btn btn-primary' onClick={this.ntdEventHandleClick1}>Button 1 - Dữ liệu trong state</button>
      </div>
    )
  }
}
export default NtdClassCompEventState;