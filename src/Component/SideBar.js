import Icon from "react-icons-kit";
import { type } from "react-icons-kit/feather/type";
import { upload } from "react-icons-kit/feather/upload";
import { image } from "react-icons-kit/feather/image";
import { Col, Container, Row } from "react-bootstrap";

const TopSideBar = ({selection,setSelection}) => {

  const allItems = [
    {
        "id" : "color",
        "name" : "Color",
        "icon" : type
    },
    {
        "id" : "text",
        "name" : "Text",
        "icon" : type
    },
    {
        "id" : "image",
        "name" : "Image",
        "icon" : image
    },
    {
        "id" : "upload",
        "name" : "Upload",
        "icon" : upload
    }
  ] 

  return (
    <Container fluid className="sidebar">
        <Row className="w100">
            {allItems.map(item => 
                <Col className={`sidebox w100 ${selection === item.id ? "active" : ""}`}
                  onClick={() => setSelection(item.id)}>
                    <div className="icon">
                    <Icon icon={item.icon} size={22} />
                    </div>
                    <h5>{item.name}</h5>
                </Col>
            )}
        </Row>
      </Container>
  );
};

export default TopSideBar;
