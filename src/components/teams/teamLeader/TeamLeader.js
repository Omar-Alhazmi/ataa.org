import React, { Component } from 'react'
import Footer from '../../footer/Footer';
import '../../styles/TeamLeaderLayout.css';
import { getTeamLeader, TeamRegistration } from '../../api_config/api';
import ApiConfig from '../../api_config/ApiConfig';

import { getInfo } from '../../helperMethods';
import Swal from "sweetalert2";

const id = getInfo().data._id
export default class TeamLeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haveTeam: false,
            TeamName: "",
            NumberOfII: 0,
            Vision: "",
            Message: "",
            GeneralGoal: "",
            SpecificGoal: "",
            CreateAt:"",
            Logo:"",
        }
    }
    componentDidMount() {
        this.checkTeaLeader()

    }
    checkTeaLeader = () => {
        getTeamLeader(id)
            .then((res) => {
                const {CreateAt,GeneralGoal,Message,NumberOfII,SpecificGoal,TeamName,Vision} = res.data.data
                if (res.data.Leader._id === id) {
                    this.setState({
                        haveTeam: true,
                        CreateAt: CreateAt,
                        TeamName: TeamName,
                        NumberOfII: NumberOfII,
                        Vision: Vision,
                        Message: Message,
                        GeneralGoal: GeneralGoal,
                        SpecificGoal: SpecificGoal,
                        Logo:res.data.Logo
                    })
                }
                else {

                }
            })
            .catch((err) => {
                return Swal.fire({ icon: 'error', title: `Auth failed` })
            })
    }
    addNewTeam = (Team) => {
        TeamRegistration(Team, id)
            .then(response => {
                try {
                    Swal.fire({
                        title: `  تم إضافة   ${this.state.TeamName}   بنجاح`,
                        icon: 'success',
                        confirmButtonText: 'موافق',
                        showCancelButton: false,
                    })
                }
                catch (error) {
                    Swal.fire({
                        title: ` ${response.data.message}`,
                        icon: 'error',
                        showCancelButton: false,
                    })
                }
            })
    }
    handleChange = event =>
        this.setState({
            [event.target.name]: event.target.value
        });

    handleSubmit = e => {
        const newActivitie = this.state;
        e.preventDefault();
        this.addActivitie(newActivitie);
    };

    render() {
        const {Logo} = this.state
        console.log(ApiConfig+Logo);

        return (
            <>
                <div className="TeamLeaderContainer">
                    <div className="header">
                    </div>
                    <div className="nav">
                        <div className="firstContainer">
                        <div className="teamImageContainer">
                            <img className="teamImage" src={ApiConfig+Logo}/>
                        </div>                       
                         <div className="CustomButton">
                             تغيير الشعار
                        </div>
                        </div>
                        </div>
                    <div className="main"> area</div>
                    <div  className="footer">div </div >
                </div>
                <Footer />
            </>
        )
    }
}
