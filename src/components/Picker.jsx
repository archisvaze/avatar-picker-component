import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { switchAvatar } from '../slices/mySlice';

export default function Picker(props) {

    const dispatch = useDispatch();
    const state = useSelector(state => state.myState);
    console.log(state.visible)

    return (
        <div style={{ display: state.visible === true ? "flex" : "none" }} className='picker-container'>
            <div className="picker-triangle"></div>
            {state.avatars.map(obj => {
                return (
                    <div onClick={() => dispatch(switchAvatar(obj.id))} key={obj.id} className="picker-avatar">
                        <img src={obj.src} alt="" className="picker-avatar-img" />
                    </div>
                )
            })}
        </div>
    )
}
