import React, { Component } from 'react'
import Footer from '../../footer/Footer';
import '../../styles/TeamLeaderLayout.css';
import { getTeamLeader, TeamRegistration } from '../../api_config/api';
import ApiConfig from '../../api_config/ApiConfig';
import { getId } from '../../helperMethods';
import { AiFillEdit } from "react-icons/ai";

import Swal from "sweetalert2";


export default class TeamLeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haveTeam: false,
            TeamName: "",
            Leader: "",
            NumberOfII: 0,
            Vision: "",
            Message: "",
            GeneralGoal: "",
            SpecificGoal: "",
            CreateAt: "",
            Logo: "",
        }
    }
    componentDidMount() {
        this.checkTeaLeader()

    }
    checkTeaLeader = () => {
        getTeamLeader(getId())
            .then((res) => {
                console.log(res.data);
                const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, TeamName, Vision } = res.data.data
                if (res.data.Leader._id === getId()) {
                    this.setState({
                        haveTeam: true,
                        CreateAt: CreateAt,
                        TeamName: TeamName,
                        NumberOfII: NumberOfII,
                        Vision: Vision,
                        Message: Message,
                        GeneralGoal: GeneralGoal,
                        SpecificGoal: SpecificGoal,
                        Leader: res.data.Leader.FullName,
                        Logo: res.data.Logo
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
        TeamRegistration(Team, getId())
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
        const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, TeamName, Vision, Logo, Leader } = this.state
        return (
            <>
             <div className="teamContainer">
                     <div className="editImageOnHover" style={{ backgroundImage:`url(${ApiConfig}${Logo})`,   backgroundRepeat: `no-repeat`}}>
                        <div className="editIcon">
                                                     <AiFillEdit/>
                            </div>                 </div>
                <h4 className="heading_4">
                    <span className="meta-data">{NumberOfII}</span>
                    <span className="meta-data">{CreateAt.slice(0,10)}</span>
                </h4>
                <h1 className="teamName">{TeamName}</h1>
                <div className="editContentOnHover">
                <div className="teamMainDisplayContainer">
                <div className="editIcon">  <AiFillEdit/> </div> 
                <div className="contentSection_1">
                <h2 className="heading_2">
                   الرؤية:
                </h2>
                <p className="discretion">
                 {Vision}     
                </p>
                <h2 className="heading_2">
                الرسالة:
                </h2>
                <p className="discretion">
                 {Message}     
                </p>
                </div>
                <div className="contentSection_2">
                <h2 className="heading_2">
                الهدف العام:
                </h2>
                <p className="discretion">
                 {GeneralGoal}     
                </p>
                <h2 className="heading_2">
            الاهداف التفصيلية:
                </h2>
                <p className="discretion">
                 {SpecificGoal}     
                </p>
                </div>
                </div>
                </div>
                <hr className="H_line" />
                <h2 className="heading_2">
                  اعضاء الفريق
                </h2>
                <div className="crew-members">
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader}
                        </p>
                    </div>
    
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader}
                        </p>
                    </div>
           
                </div>
                </div>
                <Footer />
            </>
        )
    }
}
