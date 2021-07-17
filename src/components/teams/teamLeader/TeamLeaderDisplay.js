import React, { Component } from 'react'
import { AiFillEdit } from "react-icons/ai";
import ApiConfig from '../../api_config/ApiConfig';

export default class TeamLeaderDisplay extends Component {
    render() {
        const {Logo,Leader} =this.props.data
        const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, TeamName, Vision} =this.props.data.teamData
        return (
            <div>
                {CreateAt !== undefined ?
                 <div className="teamContainer">
                    <div className="editImageOnHover"
                     //style={{ backgroundImage: `url(${ApiConfig}${Logo})`, backgroundRepeat: `no-repeat` }}
                     >
                        <img src={`${ApiConfig}${Logo}`} />
                        <div className="editIcon" onClick={e => this.props.toggleHandler(e)} >
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
                :""}
            </div>
        )
    }
}
