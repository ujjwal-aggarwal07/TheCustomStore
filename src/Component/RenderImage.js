import React from 'react';
import { isBlurhashValid } from 'blurhash';
import { Blurhash } from 'react-blurhash';

const RenderGivenImage = ({image, isLoaded}) => {
    const isHashForBlurValid = isBlurhashValid(image.blur_hash);
    return(
      // {isLoaded ? 
      //   () 
      // : (<p></p>)}
      <>
      {isLoaded ? 
        <img src={image.url} alt={image.txt} style={{width:"100%",height:"100%"}}/> 
        : 
        <>
        {isHashForBlurValid ? 
          <Blurhash hash={image.blur_hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}/>
          : <div style={{width:"100px",height:"100px"}}/>}
        </>}
      </>
    )
}

export default RenderGivenImage;