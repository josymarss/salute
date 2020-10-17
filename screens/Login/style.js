import styled from 'styled-components'

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    background-color:black;
    
`;
export const NameLogo = styled.Text`
    font-size:30px;
    color: white;
`
export const ImageTop = styled.Image`
    width: 150;
    height:150;

`
export const Title = styled.Text`
    font-weight:bold;
    font-size:20px;
    color:'rgb(50, 132, 255)';
    width:260;
    text-align:center;
    margin-bottom:20;
`;
export const TextButton = styled.Text`
    color:${props => props.color? props.color:'white'};
    font-size:${props => props.size}
`
export const Button = styled.TouchableOpacity`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;
    font-weight:${props => props.outline?'':'bold'};
    background-color:${props => props.outline ? 'rgb(23, 23, 23)':'rgb(50, 132, 255)'};
    color:${props => props.outline ? rgb(50, 132, 255) : "white"};
    width:250;
    height:40;
    border-radius: 150px;
    border-width:2px;
    border-color:rgb(50, 132, 255);
    margin-top:8px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor:'rgba(50, 132, 255,0.5)'
})`
    font-size:20px; 
    background-color:'rgb(23, 23, 23)';
    color:#3284FF;
    width:250;
    height:40;
    border-radius: 150px;
    text-align:center;
    margin-top:8;
`;

export const CreateAccountText = styled.Text`
    font-weight:bold;
    font-size:20px;
    color:#3284FF;
    margin-top:18px;
`