import React, { Component } from "react";
import msPanda from './images/mspanda.png';
import thaySang from './images/thaysang.png';
import thayHung from './images/hung.png';

class UserCards extends Component {
  render() {
    return (
      <div className="clearfix">


        <div className="row">

            <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={msPanda}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h4 className="card-title">
                    MS DIỄM HẰNG (PANDA)
                  </h4>
                  <p className="card-text" style={{textAlign:'left'},{fontWeight:'bold'}}>
                        NHÀ SÁNG LẬP MSPANDA.EDU.VN
                  </p>
                   <p className="card-text" style={{textAlign:'left'}}>

                    ☀ Cử nhân Ngôn Ngữ Anh - Trường ĐH Khoa Học Xã Hội - Nhân Văn TPHCM.
                    <br />
                    ☀ Có trên 10 năm kinh nghiệm giảng dạy luyện thi trường chuyên, đại học và các chứng chỉ ngoại ngữ quốc tế.
                    <br />
                    ☀ Liên Hệ (Zalo): 094 292 7249

                    {/* <br/>
                    &nbsp;&nbsp;&nbsp; Website: <a href="https://mspanda.edu.vn"><span class="label label-danger">mspanda.edu.vn</span></a>
                     <br/>
                     &nbsp;&nbsp;&nbsp; Facebook: <a href="https://www.facebook.com/mspandaenglish"><span class="label label-danger">Ms Panda English</span></a> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={thaySang}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h4 className="card-title">
                    THẦY <br/> HUỲNH VĨNH SANG
                  </h4>
                  <p className="card-text" style={{textAlign:'left'},{fontWeight:'bold'}}>
                        GIẢNG VIÊN KHOA TOÁN ĐẠI HỌC KHOA HỌC TỰ NHIÊN
                  </p>
                   <p className="card-text" style={{textAlign:'left'}}>
                    ☀ Thạc sĩ Toán - Trường ĐH Khoa Học Tự Nhiên TPHCM.
                    <br />
                    ☀ Có nhiều năm kinh nghiệm giảng dạy luyện thi trường chuyên, đại học và các chứng chỉ toán quốc tế.
                    <br />
                    ☀ Liên Hệ (Zalo): 0932 976 462
                    <br/>
                    <br/>
                    <br/>
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={thayHung}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h4 className="card-title">
                    THẦY <br/> LÊ NGUYỄN HUY HÙNG
                  </h4>
                  <p className="card-text" style={{textAlign:'left'},{fontWeight:'bold'}}>
                    SINH VIÊN KHOA TOÁN ĐẠI HỌC KHOA HỌC TỰ NHIÊN
                  </p>
                   <p className="card-text" style={{textAlign:'left'}}>
                    ☀ Giải Nhì Tuần Cuộc Thi Đường Lên Đỉnh Olympia
                    <br />
                    ☀ 1 năm luyện thi Trần Đại Nghĩa
                    <br />
                    ☀ Liên Hệ (Zalo): 0925307854
                    <br/>
                    <br/>
                    <br/>
                  </p>
                </div>
              </div>
            </div> */}


        </div>
      </div>
    );
  }
}

export default UserCards;
