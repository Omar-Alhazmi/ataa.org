import React, { Component } from 'react'
import { BsArrowRight } from "react-icons/bs";
import apiURL from '../api_config/ApiConfig';
import "./table.css"

export default class currentTeam extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teamId: this.props.id
        };
    }
    render() {
        const data = this.props.data
        return (
            <div className="teamContainer">
                <button className="button" onClick={e => this.props.tog(e)}> <BsArrowRight /></button>
                <div class="wrapper">
                    <div class="table">
                        <div class="row head first">
                            <div class="cell table_image">
                                <img src={apiURL + data.Logo} alt=""/>
                            </div>
                            <div class="cell teamName">
                                {data.data.TeamName}
                            </div>
                        </div>
                        <hr />
                        <div class="row head">
                            <div class="cell">
                                قائد الفريق
                            </div>
                            <div class="cell">
                                نائب قائد الفريق
                            </div>
                            <div class="cell">
                                تاريخ التأسيس
                            </div>
                            <div class="cell">
                                عدد الاعضاء
                            </div>
                            <div class="cell">
                                عدد المبادرات المنفذة
                            </div>

                        </div>
                        <div className="row">
                            <div className="cell" style={{ cursor: "pointer" }} data-title="ActivityName">
                                {data.Leader.FullName}
                            </div>
                            <div className="cell" data-title="ActivityDescription">
                                {data.Members.length}
                            </div>
                            <div className="cell" data-title="ActivityDescription">
                                {data.data.CreateAt}
                            </div>
                            <div className="cell" data-title="ActivityDescription">
                                {data.data.GeneralGoal}
                            </div>
                            <div className="cell" data-title="ActivityDescription">
                                {data.data.NumberOfII}
                            </div>
                        </div>
                        <div class="row head">
                            <div class="cell">
                                مجال الفريق
                            </div>
                            <div class="cell">
                                الرؤية
                            </div>
                            <div class="cell">
                                الرسالة
                            </div>
                            <div class="cell">
                                الهدف العام
                            </div>
                            <div class="cell">
                                الاهداف التفصيلية
                            </div>
                        </div>
                        <div className="row">
                            <div className="cell" data-title="ActivityDescription">
                                {data.Members.length}
                            </div>
                            <div className="cell" data-title="ActivityDescription">
                                {data.data.Vision}
                            </div>
                            <div className="cell" data-title="ActivityDescription">
                                {data.data.Message}
                            </div>
                            <div className="cell" data-title="ActivityDescription">
                                {data.data.GeneralGoal}
                            </div>                 <div className="cell" data-title="ActivityDescription">
                                {data.data.SpecificGoal}
                            </div>
                        </div>
                             <div class="row head">
                        <div class="cell">
                            اعضاء الفريق
                        </div>
                    </div>
                    <div className="row">
                    <div className="cell" data-title="ActivityDescription">
                                {data.Members}
                            </div>
                        </div>
                    </div>
               
                </div>






                {/*
                          <div className="cell" data-title="ActivityDescription">
                  {data.Members.length}
                 </div>
         <div className="cell" data-title="ActivityDescription">
{data.data.Vision}
</div>
<div className="cell" data-title="ActivityDescription">
{data.data.Message}
</div>
<div className="cell" data-title="ActivityDescription">
{data.data.GeneralGoal}
</div>                 <div className="cell" data-title="ActivityDescription">
{data.data.SpecificGoal}
</div> */}

            </div>
        )
    }
}
