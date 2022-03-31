const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
    {
        id:1,
        title: 'aa',
         categoryID: 2,
          photo: 'https://picsum.photos/id/659/300/300'
    },
    {
        id:2,
        title: 'yeu',
        categoryID: 2, 
        photo: 'https://picsum.photos/id/699/300/300'
    },
    {
        id:3,
        title: 'yeu',
        categoryID: 2, 
        photo: 'https://picsum.photos/id/659/300/300'
    },
    {
        id:4,
        title: 'em', 
        categoryID: 2, 
        photo: 'https://picsum.photos/id/659/300/300'
    },
    {
        id:5,
        title: 'nhieu', 
        categoryID: 2, 
        photo: 'https://picsum.photos/id/659/300/300'
    },
    {
        id:6,
        title: 'qua', 
        categoryID: 2, 
        photo: 'https://picsum.photos/id/659/300/300'
    }
]


const photoSlice = createSlice(
    {
        name: 'photos',
        initialState: initialState,
        reducers: {
            addPhoto: (state, action)=> {
                const newPhoto = action.payload;
                //Khong co return nha
                state.push(newPhoto)
            },
            removePhoto: (state, action)=> {
                const removePhotoId = action.payload;
                console.log(removePhotoId)
                state = state.filter(photo => photo.id !== removePhotoId)
                return state
            },
            updatePhoto: (state,action) =>{
                const newStateId = action.payload;
                console.log(newStateId)
                state.splice(newStateId.id,1,newStateId)
                console.log(state.splice(newStateId.id,1,newStateId))
            }
           
        }
    }
)

const {reducer,actions} = photoSlice;
export const {addPhoto,removePhoto,updatePhoto} = actions;
export default reducer