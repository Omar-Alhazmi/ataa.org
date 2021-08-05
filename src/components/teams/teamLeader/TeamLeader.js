import React, { Component } from 'react'
import Footer from '../../footer/Footer';
import '../../styles/TeamLeaderLayout.css';
import { getTeamLeader, TeamRegistration, UpdateTeam } from '../../api_config/api';
import { getId, validFileType,leadTeam,newTeam } from '../../helperMethods';
import Swal from "sweetalert2";
import '../../styles/team.scss';
import TeamLeaderDisplay from './TeamLeaderDisplay';
import TeamLeaderForm from './TeamLeaderForm';
export default class TeamLeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            Leader: "",
            Logo: "",
            teamId: "",
            Members:[],
            teamData: {
                Logo: "",
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
        if(leadTeam() || newTeam()){
            this.checkTeaLeader()
        }
    }
    checkTeaLeader = () => {
        getTeamLeader(getId())
            .then((res) => {
                const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, TeamName, Vision } = res.data.data
                if (res.data.Leader._id === getId()) {
                    this.setState({  
                        Leader: res.data.Leader.FullName,
                        teamId: res.data._id,
                        Members:res.data.Members,
                        teamData: {
                            CreateAt: CreateAt,
                            TeamName: TeamName,
                            NumberOfII: NumberOfII,
                            Vision: Vision,
                            Message: Message,
                            GeneralGoal: GeneralGoal,
                            SpecificGoal: SpecificGoal,
                            Logo: res.data.Logo,
                        }
                    })
                }
                else {

                }
            })
            .catch((err) => {
                return Swal.fire({ icon: 'error', title: err })
            })
    }
    addNewTeam = (Team) => {
        const { Logo } = this.state
        if(Logo){
            if(!validFileType(Logo)){
                throw Swal.fire({
                    title: ` الرجاء التأكد من امتداد  الملف  ان يكون تابع لملفات الصور`,
                    icon: 'error',
                    showCancelButton: false,
                })
            }
            if(Logo.size > 5242880){   
                throw Swal.fire({
                    title: ` "5MB" :حجم الملف اكبر من `,
                    icon: 'error',
                    showCancelButton: false,
                })
            }}
        TeamRegistration(Team,getId(), Logo)
            .then(response => {
                console.log(response);
                if(response === "Error"){
                    Swal.fire({
                        title: ` ${response.data.message}`,
                        icon: 'error',
                        showCancelButton: false,
                    })
                }
                try {
                    Swal.fire({
                        title: `  تم إضافة   ${this.state.TeamName}   بنجاح`,
                        icon: 'success',
                        confirmButtonText: 'موافق',
                        showCancelButton: false,
                    })
                    this.toggleHandler()
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
    UpdateTeam = (Team) => {
        const { teamId, Logo } = this.state
        if(Logo){
        if(!validFileType(Logo)){
            throw Swal.fire({
                title: ` الرجاء التأكد من امتداد  الملف  ان يكون تابع لملفات الصور`,
                icon: 'error',
                showCancelButton: false,
            })
        }
        if(Logo.size > 5242880){   
            throw Swal.fire({
                title: ` "5MB" :حجم الملف اكبر من `,
                icon: 'error',
                showCancelButton: false,
            })
        }}
        UpdateTeam(Team, teamId, Logo)
            .then(response => {
                try {
                    console.log(response);
                    Swal.fire({
                        title: `  تم تعديل فريق    ${Team.TeamName}   بنجاح`,

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
    handleChange(e) {
        const teamData = { ...this.state.teamData, [e.target.name]: e.target.value }
        this.setState(() => ({ teamData }))
    }
    handleFileChange(e) {
        const file = e.target.files[0];
        this.setState({ Logo: file })
    }
    handelSubmit = e => {
        e.preventDefault();
        const { teamData } = this.state
        const TeamData = (({Logo, ...o }) => o)(teamData)
        if (leadTeam() === false ) {
            this.addNewTeam(TeamData);
        } else {
            this.UpdateTeam(TeamData);
        }
    };
    toggleHandler = (e) => {
        this.setState({ show: !this.state.show })
    }

    render() {
        const { Logo, Leader, show } = this.state
        return (
            <>  
            {show === true ?
                <TeamLeaderForm Logo={Logo} show={show} data={this.state.teamData} onFileChange={e => this.handleFileChange(e)} onNameChange={e => this.handleChange(e)} onFormSubmit={e => this.handelSubmit(e)} toggleHandler={this.toggleHandler}/>
                : ""}
                {newTeam() === false  && leadTeam() === false ?
                 <TeamLeaderForm  Logo={Logo} Leader={Leader} show={show} data={this.state.teamData} onFileChange={e => this.handleFileChange(e)} onNameChange={e => this.handleChange(e)} onFormSubmit={e => this.handelSubmit(e)} />
                :
                <TeamLeaderDisplay data={this.state} toggleHandler={this.toggleHandler} />}
                <Footer />
            </>
        )
    }
}
