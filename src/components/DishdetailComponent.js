import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments;
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
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;