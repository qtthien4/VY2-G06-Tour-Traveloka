
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto, updatePhoto } from 'features/Photo/PhotoSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

function MainPage(){
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const photos = useSelector(state=>state.photos)
    console.log('photo:',photos)
    const onPhotoRemoveClick = (photo) =>{
        console.log('getIdPhoto:',photo)
        dispatch(removePhoto(photo))
    }

    const handlePhotoEditClick = (photo)=>{       
        dispatch(updatePhoto(photo))
        return new Promise(resolve =>{           
            const editPhotoUrl = `/new-dashboard/add/${photo}`
            navigation(editPhotoUrl)
            resolve()
        })

    }
    return (
        <div>
            MainPage
            <PhotoList
                ListPhoto={photos}
                onPhotoEditClick= {handlePhotoEditClick}
                onPhotoRemoveClick = {onPhotoRemoveClick}
            />
        </div>
    )
}
export default MainPage