import React, { Component } from 'react'
import { BsArrowRight } from "react-icons/bs";
import apiURL from '../api_config/ApiConfig';
import "../styles/TeamLeaderLayout.css"

export default class currentTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamId: this.props.id
        };
    }
    render() {
        console.log(this.props.data);
        const { Leader, Members, Logo } = this.props.data
        const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, TeamName, Vision } = this.props.data.data
        return (
            <>
                <div>
                    <button className="button" onClick={e => this.props.tog(e)}> <BsArrowRight /></button>
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
                {/* <h2 className="heading_2">
                        {Members.length}
                    </h2> */}

                <div className="crew-members">
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader.FullName}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader.FullName}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader.FullName}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader.FullName}
                        </p>
                    </div>

                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader.FullName}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader.FullName}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader.FullName}
                        </p>
                    </div>
                    <div className="member">
                        قائد الفريق
                        <p className="discretion">
                            {Leader.FullName}
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
