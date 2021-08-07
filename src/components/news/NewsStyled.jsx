import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 25px 12px 18px;
  background: ${(props) => `linear-gradient(
    45deg, ${props.theme.primary}, ${props.theme.secondary}
  )`};
`

const Title = styled.h2`
  color: #555;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

const Description = styled.p`
  color: #555;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`


const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 450px;
  object-fit: cover;
  border: ${(props) => `1px solid ${props.theme.border}`};
`

const Card = ({
  title,
  date,
  description,
  styledPhoto,
}) => (
  <StyledContainer> 
   <StyledPhoto src={styledPhoto}/>
    <Title>{title}</Title>
    <Date>{date}</Date>
    <Description>{description}</Description>
   
  </StyledContainer>
)

export default Card
