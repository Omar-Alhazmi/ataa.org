import React, { Component } from 'react'
import { getInfo,checkStorage } from '../helperMethods';
import { Redirect, withRouter } from "react-router-dom";
class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: ""
        };
    }
    componentWillMount() {
        if(checkStorage() !== null){
        let jwt = getInfo().data.Role
        switch (jwt) {
            case 'TeamLeader':
                this.setState({
                    currentUser: jwt
                })
                break;
            case 'TeamCoLeader':
                this.setState({
                    currentUser: jwt
                })
                break;
            case 'TeamMember':
                this.setState({
                    currentUser: jwt
                })
                break;
            case 'GeneralMember':
                this.setState({
                    currentUser: jwt
                })
                break;
            default:
                <Redirect to={"/login"} />
                break;
        }
    }
    }
    render() {
        const { currentUser } = this.state
        if(checkStorage() !== null){
        switch (currentUser) {
            case 'TeamLeader':
                return <>{this.props.children[0]}</>
            case 'TeamCoLeader':
                return <>{this.props.children[1]}</>
            case 'TeamMember':
                return <>{this.props.children[2]}</>
            case 'GeneralMember':
                return <>{this.props.children[3]}</>
            default:
                return <Redirect to={"/login"} />
        }
    } 
       return<Redirect to={"/login"} />
    }
   
}
export default withRouter(PrivateRoute);