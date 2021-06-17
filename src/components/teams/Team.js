import React, { Component } from 'react'
import '../styles/team.scss';
import { getAllTeams, getTeamLeader } from '../api_config/api';
import apiURL from '../api_config/ApiConfig';

export default class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Teams: [],
       
        };
    }
    componentDidMount() {
        // Mack API call 
        getAllTeams(this.props.Teams)
            .then((response) => {
                this.setState({ Teams: response.data });
            })
            .catch((error) => {
            })
      
    }

    render() {
        const dateFormat = require('dateformat');

        let allTeams = <h3> قريبا... </h3>
        // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
        if (this.state.Teams.length > 0) {
            allTeams = this.state.Teams.map((item, index) => {

                return (
                    <div key={index}>
                        <div className="team_card" id="bright"  style={{ backgroundImage: `url(${apiURL}${item.Logo})` }}>
                            <div className="info_section">
                                <div className="team_header">
                                    <img className="locandina" src={`${apiURL}${item.Logo}`} />
                                    <h1>{item.data.TeamName}</h1>
                                    <h4> {dateFormat(item.data.CreateAt, "m/yy")},{item.Leader.FullName},   <span className="minutes">{item.data.NumberOfII}</span> </h4>
                                  
                                    <p className="type">الهدف العام:{item.data.SpecificGoal}</p>
                                </div>
                                <div className="team_desc">
                                    <p className="text">
                                        الرؤية: {item.data.Vision}<br/>
                                        الرسالة: {item.data.Message}<br/>
                                        الاهداف التفصيلية:{item.data.SpecificGoal}<br/>
                                    </p>
                                </div>
                                <div className="team_social">
                                </div>
                            </div>
                            <div className="blur_back bright_back"></div>
                        </div>
                    </div>
                );
            })
        }
        return (
            <>
            {allTeams}
            </>
        )
    }
}
