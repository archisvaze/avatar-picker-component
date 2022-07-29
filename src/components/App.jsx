import { useSelector, useDispatch } from 'react-redux';
import { save, handleClick } from "../slices/mySlice"
import Avatar from './Avatar';
import Picker from './Picker';
function App(props) {

    const dispatch = useDispatch();
    const state = useSelector(state => state.myState)

    return (
        <div onClick={(e) => dispatch(handleClick(e.target.className + ""))} className="main">
            <Avatar currAvatar={state.currAvatar} />
        </div>
    )
}

export default App;