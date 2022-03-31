
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


function PhotoList(props) {
  const {ListPhoto,onPhotoEditClick,onPhotoRemoveClick} = props;
  //const {photoId,setPhotoUd} =useState()
  console.log('listPhoto:',props)
    return (
        <div>
            {
                ListPhoto.map(state=>(      
                    <Card key={state.id}>
                    <CardImg top width="20%" src={state.photo} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{state.title}</CardTitle>
                      <CardSubtitle>{state.categoryID}</CardSubtitle>
                    </CardBody>
                    <Button onClick = {()=>onPhotoRemoveClick(state.id)}>Delete</Button>
                    <Button onClick = {()=>onPhotoEditClick(state.id)}>Update</Button>
                  </Card>
                ))
            }
      </div>
    )
}
export default PhotoList