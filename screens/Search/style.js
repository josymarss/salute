import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-top:10px;
`
export const Button = styled.TouchableOpacity`
    margin-left:15px;
`
export const TextInputType = styled.TextInput.attrs({
    placeholderTextColor:'#253D60'
})`
    border:1px solid #3284FF;
    width:250px;
    height:30px;
    border-radius:60px;
    font-size:12px;
    color:white;
    text-align:center;
    font-size:14px;
    margin-top:6px;
`;