import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
initialState = {
    saved: "", avatars: [
        { "src": "images/avatar1.png", "label": "Avatar 1", "id": 1 },
        { "src": "images/avatar2.png", "label": "Avatar 2", "id": 2 },
        { "src": "images/avatar3.png", "label": "Avatar 3", "id": 3 },
        { "src": "images/avatar4.png", "label": "Avatar 4", "id": 4 },
        { "src": "images/avatar5.png", "label": "Avatar 5", "id": 5 },
        { "src": "images/avatar6.png", "label": "Avatar 6", "id": 6 }
    ],
    currAvatar: { "src": "images/avatar1.png", "label": "Avatar 1", "id": 1 },
    visible: false,
    loading: [false, -1],
};

const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        save: (state, action) => {
            state.saved = action.payload;
        },
        handleClick: (state, action) => {
            if (action.payload === "avatar-img" || action.payload === "picker-avatar-img") {
                state.visible = true;
            }
            else {
                state.visible = [false, -1];
            }
        },
        switchAvatar: (state, action) => {
            for (let obj of state.avatars) {
                if (obj.id === action.payload) {
                    state.currAvatar = obj;
                    state.visible = false;
                    state.loading = false;
                }
            }
        },
        setLoading: (state, action) => {
            for (let obj of state.avatars) {
                if (obj.id === action.payload) {
                    state.loading = [true, obj.id];
                }
            }
        }
    }

})


export const { save, handleClick, switchAvatar, setLoading } = mySlice.actions;
export default mySlice.reducer;