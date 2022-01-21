import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

    function RenderDish({dish}) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}) {
            const commentsList = comments.map((comment) => {
                const date = new Date(comment.date);
                return (
                    <li key={comment.id}>
                        <div className="row">
                            {comment.comment}
                        </div>
                        <div className="row">
                            -- {comment.author}, {Intl.DateTimeFormat('en', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        }).format(date)}
                        </div>
                    </li>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsList}
                    </ul>
                </div>
            );
    }

    const DishDetail = (props) => {
        console.log("DishDetail component render invoked")

        if (props.selectedDish == null) {
            console.log("DishDetail dish is null")

            return (
                <div></div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.selectedDish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.selectedDish.comments}/>
                    </div>
                </div>
            </div>
        );
    }

export default DishDetail;