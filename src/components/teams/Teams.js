import React, { Component } from 'react'
import * as Cards from './Cards'
import {getAllTeams} from '../api_config/api';
import apiURL from '../api_config/ApiConfig';
import Footer from '../footer/Footer';
import CurrentTeam from './CurrentTeam';
import Pagination from './Pagination';
import '../styles/footer.css';
export default class Teams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Teams: [],
            currentTeam: [],
            toggle:false,
            teamId:null
        };
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(currentTeam) {
        // update state with new page of items
        this.setState({ currentTeam: currentTeam });
    }

    componentDidMount() {
        //API call 
        getAllTeams(this.props.Teams)
            .then((response) => {
                this.setState({ Teams: response.data,
                 });
            })
            .catch((error) => {
            })
      
    }
    toggleHandler = (e) => {
        this.setState({ toggle: !this.state.toggle })
      }

      teamHandler =(teamId)=>{
        this.setState({teamId:teamId})
      }
    render() {
        let allTeams = <h3> قريبا... </h3>
        if (this.state.Teams.length > 0) {
            allTeams = this.state.currentTeam.map((item, index) => {
                return (                  
        <div id={item._id} key={index}>
            <Cards.SingleCard   onClick={()=>this.teamHandler(index)}>
                <Cards.CardsIcon src={apiURL+item.Logo} />
                <Cards.CardsH2>{item.data.TeamName}</Cards.CardsH2>
                <Cards.CardsP>{item.Content}</Cards.CardsP>
            </Cards.SingleCard>

        </div>
    )
})}
return(
    <>
    {this.state.toggle === false?
            <Cards.TeamContainer>
                <Cards.CardsContainer id="Teams" onClick= {()=>this.toggleHandler()} >
                    <Cards.CardsWrapper>
                        {allTeams}
                    </Cards.CardsWrapper>
                </Cards.CardsContainer>
                <div className="PaginationContainer">
                    <div className="Pagination">
                        <Pagination items={this.state.Teams} onChangePage={this.onChangePage} pageSize={12} className={ '"is-active"'}/>
                    </div>
                </div>
            </Cards.TeamContainer>: <CurrentTeam  tog={e=>this.toggleHandler(e)} data={this.state.currentTeam[this.state.teamId]} />}
    <Footer />
    </>
)
}
}



