import React, { Component } from 'react'
import Footer from '../../footer/Footer';
import '../../styles/TeamLeaderLayout.css';
import { getTeamLeader, TeamRegistration } from '../../api_config/api';
import ApiConfig from '../../api_config/ApiConfig';
import { getId } from '../../helperMethods';
import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import '../../styles/team.scss';

export default class TeamLeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haveTeam: false,
            show: false,
            Leader: "",
            TeamData: {
                NumberOfII: 0,
                TeamName: "",
                Vision: "",
                Message: "",
                GeneralGoal: "",
                SpecificGoal: "",
                CreateAt: "",
                Logo: "",
            }
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
                        Leader: res.data.Leader.FullName,

                        TeamData: {
                            CreateAt: CreateAt,
                            TeamName: TeamName,
                            NumberOfII: NumberOfII,
                            Vision: Vision,
                            Message: Message,
                            GeneralGoal: GeneralGoal,
                            SpecificGoal: SpecificGoal,
                            Logo: res.data.Logo
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
        e.preventDefault();
        if (this.state.haveTeam === false) {
            const newNewTeam = this.state.TeamData;
            this.addNewTeam(newNewTeam);
        }
    };
    toggleHandler = (e) => {
        this.setState({ show: !this.state.show })
    }
    render() {
        const { Leader, show } = this.state
        const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, TeamName, Vision, Logo } = this.state.TeamData
        return (
            <>
                {show === true ?
                    <div className="modalContainer">
                        <form className='login-form' onSubmit={e => this.handelSubmit(e)}>
                            <div className="flex-row">
                                <label className="lf--label" for="Vision">
                                    <svg x="0px" y="0px" width="12px" height="13px">
                                    </svg>
                                </label>
                                <input id="Vision"
                                    required
                                    className='lf--input'
                                    placeholder={Vision}
                                    name={Vision}
                                    type="text"
                                    onChange={e => this.handleChange(e)}
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
                                    placeholder={Message}
                                    name={Message}
                                    type="text"
                                    onChange={e => this.handleChange(e)}
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
                                    placeholder={SpecificGoal}
                                    name={SpecificGoal}
                                    type="text"
                                    onChange={e => this.handleChange(e)}
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
                                    placeholder={GeneralGoal}
                                    name={GeneralGoal}
                                    type="text"
                                    onChange={e => this.handleChange(e)}
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
                                    placeholder={NumberOfII}
                                    name={NumberOfII}
                                    type="number"
                                    onChange={e => this.handleChange(e)}
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
                                    placeholder={CreateAt}
                                    name={CreateAt}
                                    type="date"
                                    onChange={e => this.handleChange(e)}
                                    value={CreateAt} />
                            </div>
                            <input className='lf--submit' type='submit' value='تسجيل الدخول' onClick={e => this.toggleHandler(e)} />
                        </form>
                    </div>
                    : ""}
                <div className="teamContainer">
                    <div className="editImageOnHover" style={{ backgroundImage: `url(${ApiConfig}${Logo})`, backgroundRepeat: `no-repeat` }}>
                        <div className="editIcon" onClick={e => this.toggleHandler(e)} >
                            <AiFillEdit />
                        </div>                 </div>
                    <h4 className="heading_4">
                        <span className="meta-data">{NumberOfII}</span>
                        <span className="meta-data">{CreateAt.slice(0, 10)}</span>
                    </h4>
                    <h1 className="teamName">{TeamName}</h1>
                    <div className="editContentOnHover">
                        <div className="teamMainDisplayContainer">
                            <div className="editIcon">  <AiFillEdit /> </div>
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
