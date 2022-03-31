import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null,
}
const getRanDomImageUrl = () =>{
    const randomId = Math.trunc(Math.random()*2000)
    return `https://picsum.photos/id/${randomId}/300/300`
}
function RandomPhoto(props){
  const {
    imageUrl,name,onImageUrlChange,onRandomButtonBlur
  } = props;

 
  const handleRandomPhotoClick = async ()=>{
      if(onImageUrlChange){
        const randomImageUrl = getRanDomImageUrl();
        
        onImageUrlChange(randomImageUrl)
        
      } 
     
  }
    return (
        <div>
            <div>
                <Button
                    name={name}
                    outline
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >Random Photo</Button>
            </div>
            <div>
                {imageUrl && <img 
                    src={imageUrl}
                    alt="Ooops ... not found. Please click random again!"
                    onError={handleRandomPhotoClick}
                />}
            </div>
        </div>
    )
}

export default RandomPhoto