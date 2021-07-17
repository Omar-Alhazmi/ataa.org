import React, { Component } from 'react'
import Footer from '../../footer/Footer';
import '../../styles/TeamLeaderLayout.css';
import { getTeamLeader, TeamRegistration, UpdateTeam } from '../../api_config/api';
import { getId,checkStorage } from '../../helperMethods';
import Swal from "sweetalert2";
import '../../styles/team.scss';
import TeamLeaderDisplay from './TeamLeaderDisplay';
import TeamLeaderForm from './TeamLeaderForm';
import apiURL from'../../api_config/ApiConfig';
import axios from 'axios';
// import {checkStorage} from '../helperMethods';
export default class TeamLeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haveTeam: false,
            show: false,
            Leader: "",
            Logo: "",
            teamId: "",
            teamData: {
                NumberOfII: 0,
                TeamName: "",
                Vision: "",
                Message: "",
                GeneralGoal: "",
                SpecificGoal: "",
                CreateAt: "",
            }

        }
        this.handleChange = this.handleChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        this.toggleHandler = this.toggleHandler.bind(this);
    }
    componentDidMount() {
        this.checkTeaLeader()

    }
    checkTeaLeader = () => {
        getTeamLeader(getId())
            .then((res) => {
                const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, TeamName, Vision } = res.data.data
                if (res.data.Leader._id === getId()) {
                    this.setState({
                        haveTeam: true,
                        Leader: res.data.Leader.FullName,
                        Logo: res.data.Logo,
                        teamId: res.data._id,
                        teamData: {
                            CreateAt: CreateAt,
                            TeamName: TeamName,
                            NumberOfII: NumberOfII,
                            Vision: Vision,
                            Message: Message,
                            GeneralGoal: GeneralGoal,
                            SpecificGoal: SpecificGoal,
                        }
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
        const teamId = this.state.teamId
        TeamRegistration(Team, teamId)
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
    UpdateTeam = (Team,Logo) => {
        const config ={
            headers:{
                "Content-type": "application/json",
            }
          }
          if(checkStorage()){
            config.headers['Authorization'] = `Bearer ${checkStorage()}`
          }
          const file ={
            headers:{
            'Content-Type': 'multipart/form-data'
            }
          }
        console.log(Team,Logo);
      const {teamId }= this.state
      const formData = new FormData();
      formData.append('file',Logo)
        console.warn(Team);
        axios({method: 'patch', url: apiURL + `api/Update/TeamBy/${teamId}`,file,data:{ Team,formData}, config }) 
         .then(response => {
            try {
                console.log(response);
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
                })}})
        // UpdateTeam(Team, teamId,data)
        //     .then(response => {
        //         try {
        //             console.log(response);
        //             Swal.fire({
        //                 title: `  تم إضافة   ${this.state.TeamName}   بنجاح`,
        //                 icon: 'success',
        //                 confirmButtonText: 'موافق',
        //                 showCancelButton: false,
        //             })
        //         }
        //         catch (error) {
        //             Swal.fire({
        //                 title: ` ${response.data.message}`,
        //                 icon: 'error',
        //                 showCancelButton: false,
        //             })
        //         }
        //     })
    }
    handleChange(e) {
        const teamData = { ...this.state.teamData, [e.target.name]: e.target.value }
        this.setState(() => ({ teamData }))
        if(e.target.files){
                const file = e.target.files[0];
                this.setState({ Logo: file })
        }
    }

    handelSubmit = e => {
        e.preventDefault();
        const {Logo,teamData}= this.state
        if (this.state.haveTeam === false) {
            this.addNewTeam(teamData);
        } else {
            this.UpdateTeam(teamData,Logo);
        }
    };
    toggleHandler = (e) => {
        this.setState({ show: !this.state.show })
    }

    render() {
        const { Logo, Leader, show } = this.state
        // const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, Vision } = this.state.teamData
        return (
            <>                {show === true ?
                <TeamLeaderForm Logo={Logo} Leader={Leader} show={Leader} data={this.state.teamData} onNameChange={e => this.handleChange(e)} onFormSubmit={e => this.handelSubmit(e)}/>
                : ""}
                <TeamLeaderDisplay data={this.state} toggleHandler={this.toggleHandler} />
                <Footer />
            </>
        )
    }
}
