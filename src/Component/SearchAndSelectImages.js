import React, { useEffect, useState } from 'react';
import { Row, Col, Alert} from 'react-bootstrap';
import Loader from './Loader';
import CustomCard from './CustomCard';
import RenderGivenImage from './RenderImage';

const SearchAndSelectImage = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});
  const [error, setError] = useState(null);
  
  useEffect(() => {
      fetch(
        "https://api.unsplash.com/search/photos/?client_id=dUO_hDITwVMkmHvUD-NX03FybLRXCkzM5VV-_iQTx0c&per_page=15&query=cat"
      ).then(res => res.json())
      .then((res) => {
        var allImageDetails = [];
        var allLoadedImages = {};
        res.results.forEach(
          x => {
            var obj = {
              "id":x.id, 
              "url" : x.urls["raw"],
              "txt" : x.alt_description,
              "blur_hash" : x.blur_hash
            }
            allImageDetails.push(obj);
            allLoadedImages[obj.id] = false;
          });
        setImages(allImageDetails);
        setLoadedImages(allLoadedImages);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setImages([]);
        setLoadedImages({});
      })
      .finally(() => setDataLoaded(true));
  }, [setLoadedImages]);

  useEffect(() => {
    if (images.length > 0) {
      const loadImage = (index) => {
        const img = new Image();
        img.src = images[index].url;
        img.onload = () => {
          setLoadedImages((previousImages) => {
            return {
              ...previousImages,
              [images[index].id] : true
            }
          }
          );
        };
      };
      images.forEach((_, index) => loadImage(index));
    }
  }, [images,setLoadedImages]);

  return (
    <div className="container mt-4">
      <Row className="gx-2 gy-2">
        {!dataLoaded && <Loader/>}
        {dataLoaded && error && <Alert variant='danger'>Something went wrong while fetching images</Alert>}
        {dataLoaded && !error && images.map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={4} key={item.id}>
            <CustomCard>
              <RenderGivenImage image = {item} isLoaded={loadedImages[item.id] ?? false}/>
            </CustomCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SearchAndSelectImage;
