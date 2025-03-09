import React, { Component } from 'react'

class NtdClassComEventPostData extends Component {
    constructor(props){
        super(props);
    }
    //Hàm xử lý sự kiện
    ntdEvenHandleclick = ()=>{
        // Chuyển dữ liệu lên App thông qua props
        this.props.onNtdDataToApp("Dữ liệu từ component con - NtdClassCompEventPostData");
    };
  render() {
    return (
      <div className='alert alert-success'>
        <button className="btn btn-primary"
            onClick={this.ntdEvenHandleclick}
            >Button 1 - Chuyển dữ liệu lên App
            </button>
      </div>
    );
  }
}
export default NtdClassComEventPostData;