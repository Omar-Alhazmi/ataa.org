import React, { Component } from 'react'
 import styled from 'styled-components'
import Card from './NewsStyled'
import { getAllNews } from '../api_config/api'
import apiURL from '../api_config/ApiConfig';
import Footer from '../footer/Footer';
export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            News: [],
        };
    }
    componentDidMount() {
        // Mack API call 
        getAllNews(this.props.News)
            .then((response) => {
                const News = response.data.filter((News) => {
                    return News.InHomePage === true
                })
                this.setState({ News });
            })
            .catch((error) => {
            })
    }

    render() {
          const StyledRoot = styled.div`
  padding: 50px 12px;
`

  const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
 
`

        const date = new Date().toLocaleDateString()
        const news = this.state.News
        let allNews=(
            <StyledRoot>
            <StyledContainer>

              <Card
                title={'soon...'}
                date={date}
                description={'soon...'}
              />
            </StyledContainer>
          </StyledRoot>
        )
        if (news.length > 0) {
            allNews = (
                <StyledRoot>
                <StyledContainer >
                {news.map((item, index) => (
                  <Card
                    key={index}
                    styledPhoto={`${apiURL}${item.img[0]}`}
                    title={item.Title}
                    date={item.PostAt}
                    description={item.Content}
                  />              

                ))}
                </StyledContainer>
              </StyledRoot>
            )}
        return (
            <div>
                {allNews}
                <Footer />
            </div>
        )
    }
}




