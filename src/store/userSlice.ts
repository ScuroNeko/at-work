import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserState {
    users: UserType[],
    userToEdit: UserType | null,
}

const initialState: UserState = {
    users: [],
    userToEdit: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserType[]>) => {
            state.users = [...action.payload]
        },
        hideUser: (state, action: PayloadAction<number>) => {
            state.users = [...state.users.filter((user: UserType) => user.id !== action.payload)]
        },
        archiveUser: (state, action: PayloadAction<number>) => {
            const u = state.users.map((user: UserType) => {
                if(user.id === action.payload) user.archived = !user.archived;
                return user;
            });
            state.users = [...u]
        },
        editUser: (state, action: PayloadAction<UserType>) => {
            state.userToEdit = action.payload;
        },
        saveUser: (state, action: PayloadAction<UserType>) => {
            state.users = [...state.users.filter(u => u.id !== action.payload.id), action.payload]
                .sort((a, b) => a.id - b.id);
        }
    },
});

export const { setUsers, hideUser, archiveUser, editUser, saveUser } = usersSlice.actions

export default usersSlice.reducer