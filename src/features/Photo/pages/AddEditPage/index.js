import PhotoForm from "features/Photo/components/PhotoForm"
import {addPhoto, updatePhoto} from '../../PhotoSlice';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from 'react-router-dom'


function AddEditPage(){
    
    let {id} = useParams();
   
    const photos = useSelector(state=>state.photos)
    const isAddMode = !id  
    console.log(isAddMode) 
    const photo = photos.find(photos => photos.id === +id)
    
    const initialValue = isAddMode ? {
        title: '',
        categoryID:'',
        photo:''
    } : photo

    const dispatch = useDispatch();
    const navigation = useNavigate()
    //submit add vao redux sau do redirect vao trang home
    // va lay list moi co photo vua moi add vao
    const handleSubmit = (values)=>{
        return new Promise( resolve =>{
            setTimeout(()=>{
                if(isAddMode){
                    console.log('Form Submit:',values )
                    dispatch(addPhoto(values))
                   
                }
                else{
                    dispatch(updatePhoto(values))
                }
                navigation('/new-dashboard')
                resolve()
            },1500)
        } ) 
        
    }
    return (
        <div>
            <PhotoForm
                initialValue={initialValue}
                onSubmit={handleSubmit}
            />
        </div>
    )
}
export default AddEditPage