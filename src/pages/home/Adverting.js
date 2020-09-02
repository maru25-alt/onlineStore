import React, { Component } from 'react'
import img from '../../assets/img/fashion/header-2.png';

export class Adverting extends Component {
    render() {
        return (
            <div className="adverts-container ">
            <div className="container-fluid ">
                <div className="d-flex flex-column ">
                   <div className="animate__animated animate__heartBeat animate__delay-1s" >
                       <div className="card ">
                          <img className="img-fluid" height="1"  src={img} alt='picture'></img>
                       </div> 
                    </div>
                    <div  className="animate__animated animate__heartBeat animate__delay-1s" >
                       <div className="card ">
                          <img className="img-fluid" src={img} alt='picture'></img>
                       </div> 
                    </div>
                   
                   
                </div>
            </div>
        </div>
        )
    }
}

export default Adverting
