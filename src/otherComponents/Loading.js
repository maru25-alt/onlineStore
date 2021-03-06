import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <div className="d-flex justify-content-center">
      <ReactLoading type={type} color={color} height={'5%'} width={'5%'} />
    </div>
);
 
export default Loading;