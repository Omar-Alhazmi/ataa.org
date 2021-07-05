import React, { Component } from 'react'
import * as Cards from './Cards'
import {getAllTeams} from '../api_config/api';
import apiURL from '../api_config/ApiConfig';
import Footer from '../footer/Footer';
import CurrentTeam from './CurrentTeam';
import Pagination from './Pagination';
import '../styles/footer.css';
const customLabels = {
        first: '<<',
        last: '>>',
        previous: '<',
        next: '>'
};
export default class Teams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Teams: [],
            itemInPage: [],
            toggle:false,
            teamId:null
        };
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(itemInPage) {
        // update state with new page of items
        this.setState({ itemInPage: itemInPage });
    }

    componentDidMount() {
        // Mack API call 
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
        // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
        if (this.state.Teams.length > 0) {
            allTeams = this.state.itemInPage.map((item, index) => {
                return (  
                    
        <div id={item._id}>
            <Cards.single_card key={index}  onClick={()=>this.teamHandler(index)}>
                <Cards.CardsIcon src={apiURL+item.Logo} />
                <Cards.CardsH2>{item.data.TeamName}</Cards.CardsH2>
                <Cards.CardsP>{item.Content}</Cards.CardsP>
            </Cards.single_card>

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
            </Cards.TeamContainer>: <CurrentTeam  tog={e=>this.toggleHandler(e)} data={this.state.itemInPage[this.state.teamId]} />}
    <Footer />
    </>
)
}
}



