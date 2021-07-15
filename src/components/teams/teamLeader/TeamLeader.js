import React, { Component } from 'react'
import Footer from '../../footer/Footer';
import '../../styles/TeamLeaderLayout.css';
import { getTeamLeader, TeamRegistration,UpdateTeam } from '../../api_config/api';
import { getId } from '../../helperMethods';
import Swal from "sweetalert2";
import '../../styles/team.scss';
import TeamLeaderDisplay from './TeamLeaderDisplay';
import TeamLeaderForm from './TeamLeaderForm';
export default class TeamLeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haveTeam: false,
            show: false,
            Leader: "",
                teamId:"",
                NumberOfII: 0,
                TeamName: "",
                Vision: "",
                Message: "",
                GeneralGoal: "",
                SpecificGoal: "",
                CreateAt: "",
                Logo: "",
        
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
                console.log(res);
                const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, TeamName, Vision } = res.data.data
                if (res.data.Leader._id === getId()) {
                    this.setState({
                        haveTeam: true,
                        Leader: res.data.Leader.FullName,

                            teamId:res.data._id,
                            CreateAt: CreateAt,
                            TeamName: TeamName,
                            NumberOfII: NumberOfII,
                            Vision: Vision,
                            Message: Message,
                            GeneralGoal: GeneralGoal,
                            SpecificGoal: SpecificGoal,
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
    UpdateTeam = (Team) => {
        const teamId = this.state.teamId

        UpdateTeam(Team, teamId)
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
    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    handelSubmit = e => {
        e.preventDefault();
        const  { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, Vision, Logo } =this.state
        if (this.state.haveTeam === false) {
            this.addNewTeam(CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, Vision, Logo);
        }else{
            this.UpdateTeam(CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, Vision, Logo);
        }
    };
    toggleHandler = (e) => {
        this.setState({ show: !this.state.show })
    }
    validFileType = (file) =>{
        const fileTypes = [
             "image/apng",
             "image/bmp",
             "image/gif",
             "image/jpeg",
             "image/pjpeg",
             "image/png",
             "image/svg+xml",
             "image/tiff",
             "image/webp",
             "image/x-icon"
           ];
         return fileTypes.includes(file.type);
       }
    render() {
           const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, Vision, Logo,Leader, show } = this.state
        return (
            <>                {show === true ?
                <div className="modalContainer">
                <form className='login-form' onSubmit={e => this.handelSubmit(e)}>
                <div className="flex-row">
                        <label className="lf--label" for="Logo">
                            <svg x="0px" y="0px" width="12px" height="13px">
                            </svg>
                        </label>
                        <input id="Logo"
                            required
                            className='lf--input'
                            // placeholder={Logo}
                            name="Logo"
                             accept={this.validFileType(Logo)}
                            type="file"
                            onChange={e=>this.handleChange(e)}
                     // value={Logo}
                      />
                    </div>
                    <div className="flex-row">
                        <label className="lf--label" for="Vision">
                            <svg x="0px" y="0px" width="12px" height="13px">
                            </svg>
                        </label>
                        <input id="Vision"
                            required
                            className='lf--input'
                            // placeholder={Vision}
                            name="Vision"
                            type="text"
                            onChange={e=>this.handleChange(e)}
                            value={Vision} />
                    </div>
                    <div className="flex-row">
                        <label className="lf--label" for="Message">
                            <svg x="0px" y="0px" width="12px" height="13px">
                            </svg>
                        </label>
                        <input id="Message"
                            required
                            className='lf--input'
                            // placeholder={Message}
                            name="Message"
                            type="text"
                            onChange={e=>this.handleChange(e)}
                            value={Message} />
                    </div>
                    <div className="flex-row">
                        <label className="lf--label" for="SpecificGoal">
                            <svg x="0px" y="0px" width="12px" height="13px">
                            </svg>
                        </label>
                        <input id="SpecificGoal"
                            required
                            className='lf--input'
                            // placeholder={SpecificGoal}
                            name="SpecificGoal"
                            type="text"
                            onChange={e=>this.handleChange(e)}
                            value={SpecificGoal} />
                    </div>
                    <div className="flex-row">
                        <label className="lf--label" for="GeneralGoal">
                            <svg x="0px" y="0px" width="12px" height="13px">
                            </svg>
                        </label>
                        <input id="GeneralGoal"
                            required
                            className='lf--input'
                            // placeholder={GeneralGoal}
                            name="GeneralGoal"
                            type="text"
                            onChange={e=>this.handleChange(e)}
                            value={GeneralGoal} />
                    </div>
                    <div className="flex-row">
                        <label className="lf--label" for="NumberOfII">
                            <svg x="0px" y="0px" width="12px" height="13px">
                            </svg>
                        </label>
                        <input id="NumberOfII"
                            required
                            className='lf--input'
                            // placeholder={NumberOfII}
                            name="NumberOfII"
                            type="number"
                            onChange={e=>this.handleChange(e)}
                            value={NumberOfII} />
                    </div>
                    <div className="flex-row">
                        <label className="lf--label" for="CreateAt">
                            <svg x="0px" y="0px" width="12px" height="13px">
                            </svg>
                        </label>
                        <input id="CreateAt"
                            required
                            className='lf--input'
                            // placeholder={CreateAt}
                            name="CreateAt"
                            type="date"
                            onChange={e=>this.handleChange(e)}
                            value={CreateAt} />
                    </div>
                    <input className='lf--submit' type='submit' value='تسجيل الدخول' onSubmit={e => this.handelSubmit(e)} onClick={this.handelSubmit,this.toggleHandler} />
                </form>
            </div>
                : ""}
               <TeamLeaderDisplay data={this.state} toggleHandler={this.toggleHandler}/>
                <Footer />
            </>
        )
    }
}
