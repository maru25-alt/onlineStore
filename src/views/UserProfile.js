
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import { LoginString } from "store/firebase/LoginString";



class UserProfile extends React.Component {

  state ={
    name: "",
    email: "",
    profile: "",
    telephone: "",
    telephone2: "",
    city: "",
    country:"",
    description: ""

  }

  componentWillMount(){
        this.setState({
            name : localStorage.getItem(LoginString.Name),
            email : localStorage.getItem(LoginString.Email),
            createdAt: localStorage.getItem(LoginString.CreatedAt),
            profile : localStorage.getItem(LoginString.PhotoURL),
            telephone: localStorage.getItem(LoginString.Telephone),
            telephone2: localStorage.getItem(LoginString.Telephone2),
            city: localStorage.getItem(LoginString.City),
            country: localStorage.getItem(LoginString.Country),
            description: localStorage.getItem(LoginString.Description),
         })   
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Full Name</label>
                          <Input
                            value=""
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="mike@email.com" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Telephone</label>
                          <Input
                            value=""
                            placeholder="Company"
                            type="telephone"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Telephone 2</label>
                          <Input
                            value=""
                            placeholder=""
                            type="telephone"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            value=""
                            placeholder=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            value=""
                            placeholder=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                            value="."
                            placeholder=""
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={localStorage.getItem(LoginString.PhotoURL)}
                      />
                      <h5 className="title">{localStorage.getItem(LoginString.Name)}</h5>
                    </a>
                    <p className="description">{localStorage.getItem(LoginString.Email)}</p>
                  </div>
                  <div className="card-description">
                   {localStorage.getItem(LoginString.Description)}
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="far fa-dot-circle"></i>
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="far fa-dot-circle"></i>
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="far fa-dot-circle"></i>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
