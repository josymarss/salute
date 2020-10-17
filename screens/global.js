import styled from 'styled-components/native';



export const Avatar = styled.Image`
    border:1.5px solid #3284FF;
    width:48px;
    height:48px;
    border-radius:30px;
    margin-left:10px;
    /* background-size:'cover'; */
`

export const Name = styled.Text`
    font-size:14px;
    font-weight:bold;
    color:white;
    margin-left:${props => props.size? props.size+'px' : 12+'px'};
`

export const Description = styled.Text`
    font-size:12px;
    color:lightgray;
    margin-left:10px;
`

export const Stability = styled.View`
    width:10px;
    height:10px;
    border-radius:5px;
    margin-right:16px;
    background-color:${props => {

        const {stability} = props;

        if(stability=='good'){
            return 'green';
        }else if(stability=='normal') {
            return 'orange'
        }
        
        return 'red'
      
    }};
`