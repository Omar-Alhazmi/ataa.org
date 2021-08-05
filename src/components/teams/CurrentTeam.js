import React, { Component } from 'react'
import { BsArrowRight } from "react-icons/bs";
import apiURL from '../api_config/ApiConfig';
import { UserRegToTeam } from '../api_config/api';
import { getId , checkStorage, getInfo } from '../helperMethods';
import "../styles/TeamLeaderLayout.css"
import Swal from "sweetalert2";
export default class currentTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamId: this.props.id,
            alreadyRetested: false

        };
    }

    handleSubmit() {
        const userId = getId()
        const teamId = this.props.data._id
        const teamName = this.props.data.data.TeamName
        let alreadyRetested = false
        const Retested = this.props.data.Members.filter((Retested => {
            return Retested._id === userId
        }))
        if (Retested === undefined || Retested === null || Retested.length !== 0) {
            console.log(Retested);
            alreadyRetested = true
        }
        if (alreadyRetested === true) {
            Swal.fire({
                title: ` تم السجيل في الفريق من قبل`,
                icon: 'error',
                showCancelButton: false,
            })
        }
        else if (alreadyRetested === false) {
            UserRegToTeam(userId, teamId)
                .then(response => {
                    try {
                        Swal.fire({
                            title: `  تم التسجيل في  فريق    ${teamName}   بنجاح`,
                            icon: 'success',
                            confirmButtonText: 'موافق',
                            showCancelButton: false,
                        })
                        window.location.reload(false);
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
    }
    render() {
        const { Leader, Members, Logo } = this.props.data
        const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, TeamName, Vision } = this.props.data.data
        return (
            <>
                <div>
                    <button className="button" onClick={e => this.props.tog(e)}> <BsArrowRight /></button>
                   {checkStorage() !== null && getInfo().data.Role !== "TeamLeader" ?
                    <button className="button" onClick={e => this.handleSubmit(e)}> التسجيل في الفريق</button>
                        :""}
                    <div className="teamContainer">
                        <div className="teamLogo">
                            <img src={`${apiURL}${Logo}`} alt="logo" />
                        </div>   </div>
                    <h4 className="heading_4">
                        <span className="meta-data">{NumberOfII}</span>
                        <span className="meta-data">{CreateAt.slice(0, 10)}</span>
                    </h4>
                    <h1 className="teamName">{TeamName}</h1>
                    <div className="teamMainDisplayContainer">
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
                    اعضاء الفريق : {Members.length}
                </h2>
                <div className="crew-members">
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader.FullName}
                        </p>
                    </div>
                    {
                        Members.map((item, index) => {
                            return (
                                <div className="member" key={index}>
                                    عضو الفريق
                                    <p className="discretion">
                                        {item.FullName}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
