import React, { Component } from 'react'
import styled from 'styled-components'

class AmigoContainer extends Component {
  render(){
    return (
      <CenterContainer {...this.props}>
        <MaxWidthContainer {...this.props}>
          {this.props.children}
        </MaxWidthContainer>
      </CenterContainer>
    )
  }
}

export const CenterContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color: ${props=>props.inverseBgColor?'#F5F5F5':'white'};
`
export const MaxWidthContainer = styled.div`
  width: 100%;
  max-width: ${props=>`${970-(26*2)}px`};
  background-color: ${props=>props.inverseBgColor?'#F5F5F5':'white'};
  padding: 26px;

  @media(max-width: 992px){
    max-width: ${props=>`${800-(26*2)}px`};
  }
  @media(max-width:768px){
    max-width: none;
    width:90vw;
    padding: 5vw;
  }
`

export default AmigoContainer
