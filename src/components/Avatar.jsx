import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleClick } from '../slices/mySlice';
import Picker from './Picker';

export default function Avatar(props) {
    let currAvatar = props.currAvatar;
    const dispatch = useDispatch();
    const state = useSelector(state => state.myState);


    return (
        <div className='avatar-container'>
            <img onClick={(e) => dispatch(handleClick(e.target.className + ""))} className='avatar-img' src={currAvatar.src} alt="" />
            <Picker />
        </div>
    )
}
