import styled from 'styled-components'

export const CardPoster = styled.View`
    width:350px;
    height:380px;
    border-radius:2px;
    background-color:gray;
    margin-top:12px;
    justify-content:space-between;
`

export const Header = styled.View`
    height:70px;
    flex-direction:row;
    align-items:center;
    background-color:#1f1f1f;
`
export const Body = styled.Image`
    flex:2;
`
export const Footer = styled.View`
    bottom:0px;
    height:70px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color:#1f1f1f;
`

export const Description = styled.Text`
    color:white;
    font-size:8px;
    font-size:12px;
    margin-left:8px;
`
