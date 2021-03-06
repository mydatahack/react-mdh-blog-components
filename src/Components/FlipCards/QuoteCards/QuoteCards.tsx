import { FlipCardCarousel as Carousel } from 'Components/FlipCardCarousel'
import styled from 'styled-components'

import { StyledHeading, StyledP } from '../FlipCardContent.styled'

export interface IQuoteCard {
  quote: string
  by: string
}

export interface QuoteCardsProps {
  content: IQuoteCard[]
}

const StyledQuoteCardsContainer = styled.div`
  width: 320px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: solid 1px #c7c7c7;
  margin: 5px;
`
export const QuoteCards: React.FC<QuoteCardsProps> = ({ content }) => {
  return (
    <Carousel
      dataTestId="flipCardQuote"
      content={content
        .sort(() => Math.random() - 0.5)
        .map((element) => (
          <StyledQuoteCardsContainer key={element.quote}>
            <StyledHeading>{element.quote}</StyledHeading>
            <StyledP>by {element.by}</StyledP>
          </StyledQuoteCardsContainer>
        ))}
    />
  )
}
