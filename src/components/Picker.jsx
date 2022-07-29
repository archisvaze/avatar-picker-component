import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { switchAvatar, setLoading } from '../slices/mySlice';

export default function Picker(props) {

    const dispatch = useDispatch();
    const state = useSelector(state => state.myState);
    console.log(state.visible)

    return (
        <div style={{ display: state.visible === true ? "flex" : "none" }} className='picker-container'>
            <div className="picker-triangle"></div>
            {state.avatars.map(obj => {
                return (
                    <div onClick={(e) => {
                        dispatch(setLoading(obj.id))
                        setTimeout(() => {
                            dispatch(switchAvatar(obj.id));
                        }, 2000)

                    }
                    } key={obj.id} className="picker-avatar">
                        <div style={{
                            display: state.loading[0] === true ? state.loading[1] === obj.id ? "flex" : "none" : "none"
                        }} className="loading"></div>
                        <img src={obj.src} alt="" className="picker-avatar-img" />
                    </div>
                )
            })}
        </div>
    )
}
