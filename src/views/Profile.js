
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  
  render() {
    return (
      <>
        <div className="content">
          <div className="container-fluid profile-container">
               <h1> Edit Profile</h1>
               <form>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="username">Full Name</label>
                        <input type="text" className="form-control" id="username"/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                        </div>
                       
                    </div>
                    <div className="form-row">
                         <div className="form-group col-md-6">
                            <label htmlFor="telephone">Telephone </label>
                            <input type="telephone" className="form-control" id="telephone"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="telephone2">Telephone 2</label>
                            <input type="telephone" className="form-control" id="telephone2"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option defaultValue>Choose...</option>
                            <option>...</option>
                        </select>
                        </div>
                        
                    </div>
                    <div  className="form-group col-md-6"> 
                        <button type="submit" className="btn btn-primary mx-2">Save</button>
                        <button type="button" className="btn btn-warning  mx-2">Cancel</button>
                    </div>
                    
                </form>
            
            </div>
          
        </div>
      </>
    );
  }
}

export default Dashboard;
