import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = (props) => {
    const dish = props.dish;
    return (
        <Card className="my-2">
            <CardImg
                alt={dish.name}
                src={dish.image}
                style={{
                    height: 180
                }}
                top
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h1">
                    {dish.name}
                </CardTitle>
                <CardText>
                    Category: {dish.category}
                </CardText>
                <CardText style={{ fontSize: 20, fontWeight: 'bold' }}>
                    BDT. {dish.price}
                </CardText>

                <hr />

                <LoadComments comments={dish.comments} />

            </CardBody>
        </Card>
    )
}

export default DishDetails;