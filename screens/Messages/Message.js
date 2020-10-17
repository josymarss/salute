import React from 'react'

import User from '../User/User'
import Name from '../global'
import {
    WrapContent,
    WrapComment,
    WrapUser,
    Comment
} from './messageStyle'

const Message = ({props}) => {

    <WrapContent>
                
        <WrapUser>

            <User
                name={props.name}
                avatar ={props.avatar}
                
            />

            <Name size={5}>Josymar sylva</Name>

        </WrapUser>

        <WrapComment>

            <Comment>
                {props.comment}
            </Comment>

        </WrapComment>

    </WrapContent>
}

export default Message