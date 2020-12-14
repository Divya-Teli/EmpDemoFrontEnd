// import React from 'react';
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

// const SingleList = ({singleList}) => {
//     const {email,technology,name,age,location,mobileno,designation,image }=singleList
//   return (
//     <MDBCol>
//       <MDBCard style={{ width: "22rem" }}>
//         <MDBCardImage classNameName="img-fluid" src={image} waves />
//         <MDBCardBody>
//           <MDBCardTitle>Name :{name}</MDBCardTitle>
//           <MDBCardText>
//             <p>Email :{email}</p>
//            <p>MobileNO :{mobileno}</p>
//            <p>Age :{age}</p>
//            <p>Location :{location}</p>
//            <p>Technology :
// <li>
//   <ul>{technology}</ul>
// </li>

//            </p>
//           </MDBCardText>
//           <MDBBtn>MDBBtn</MDBBtn>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
//   )
// }

// export default SingleList;

import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const SingleList = ({ singleList }) => {
  //console.log('singleiList',singleList)
  const {
    email,
    technology,
    name,
    age,
    location,
    mobileno,
    designation,
    image,
  } = singleList;
  return (
    <div className="container bcontent mt-3">
      <div className="card" style={{ width: "500"}}>
        <div className="row no-gutters">
          <div className="col-sm-5">
            <img className="card-img" src={image} height={300} alt="Suresh Dasari Card" />
          </div>
          <div className="col-sm-7">
            <div className="card-body">
              <h5 className="card-title">Name :{name}</h5>
              <div className="card-text">
                <p>Email :{email}</p>
                <p>MobileNO :{mobileno}</p>
                <p>Age :{age}</p>
                <p>Location :{location}</p>
                <p>
                  Technology :{" "}
                  {technology.map((data,key) => (
                    <li key={data.name}>{data.name}</li>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleList;
