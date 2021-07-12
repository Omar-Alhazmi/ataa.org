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

                <h1>
                 {TeamName}
                </h1>
                <img class="profile" src={`${ApiConfig}${Logo}`} />
                <h4>
                    <span class="meta-data">{NumberOfII}</span>
                    <span class="meta-data">{CreateAt.slice(0,10)}</span>
                    <h1>
                {Leader}
                </h1>
                </h4>
                <div className="teamLContainer">
                <div className="contentSection_1">
                <h2>
                   الرؤية:
                </h2>
                <p>
                 {Vision}     
                </p>
                <h2>
                الرسالة:
                </h2>
                <p>
                 {Message}     
                </p>
                </div>
                <div className="contentSection_2">
                <h2>
                الهدف العام:
                </h2>
                <p>
                 {GeneralGoal}     
                </p>
                <h2>
            الاهداف التفصيلية:
                </h2>
                <p>
                 {SpecificGoal}     
                </p>
                </div>
                </div>
                <hr />
                <h2>
                    MEET THE CREW
                </h2>
                <div class="crew-members">
                    <div class="member">
                        <p>
                            Ricky Bobby
                        </p>
                        <img class="thumb" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/bat-mag-layout.JPG" />
                        <p class="crew-text">
                            This is Ricky Bobby. He is awesome. Don't put a curse on him.
                        </p>
                        <p class="crew-text">
                            t: @rickybobby<br />f: facebook.com/rickybobby
                        </p>
                    </div>
                    <div class="member">
                        <p>
                            Ricky Bobby
                        </p>
                        <img class="thumb" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/bat-mag-layout.JPG" />
                        <p class="crew-text">
                            This is Ricky Bobby. He is awesome. Don't put a curse on him.
                        </p>
                        <p class="crew-text">
                            t: @rickybobby<br />f: facebook.com/rickybobby
                        </p>
                    </div>
                    <div class="member">
                        <p>
                            Ricky Bobby
                        </p>
                        <img class="thumb" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/bat-mag-layout.JPG" />
                        <p class="crew-text">
                            This is Ricky Bobby. He is awesome. Don't put a curse on him.
                        </p>
                        <p class="crew-text">
                            t: @rickybobby<br />f: facebook.com/rickybobby
                        </p>
                    </div>
                </div>
                <h1>
                    @thebatman &copy;2014
                </h1>
                <Footer />
            </>
        )
    }
}
