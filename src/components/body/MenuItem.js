import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = (props) => {
    const dish = props.dish;
    return (
        <div>
            <Card inverse style={{ margin: 10 }}>
                <CardImg
                    alt={dish.name}
                    src={dish.image}
                    style={{
                        height: 270,
                        opacity: 0.7
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5" style={{ fontSize: 35, color: 'black' }}>
                        {dish.name}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    )
}

export default MenuItem