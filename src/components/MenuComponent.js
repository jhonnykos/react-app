import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";
import DishDetail from "./DishdetailComponent";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        }
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        })
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
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <DishDetail selectedDish={this.state.selectedDish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;