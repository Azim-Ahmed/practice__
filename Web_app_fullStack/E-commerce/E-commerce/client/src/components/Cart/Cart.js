import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/orderActions";
class Cart extends Component {
    deleteItem = (id) => {
        this.props.deleteFromCart(id);
    };
    submit = () => {
        let ids = [];
        for (let i = 0; i < this.props.cart.length; i++) {
            ids.push(this.props.cart[i]._id);
        }
        this.props.submitOrder({
            products: ids,
            name: "tanvesh",
            sizes: [12, 13, 14],
            phone: "98765",
            address: "996",
            pin: 1234,
            email: "sarve@gmail.com",
        });
    };
    render() {
        return (
            <div>
                <ul>
                    {this.props.cart.map(function (x) {
                        return (
                            <li key={x._id}>
                                {" "}
                                {x.name}
                                <button onClick={() => this.props.deleteFromCart(x._id)}>
                                    delete
                                </button>
                            </li>
                        );
                    }, this)}
                </ul>
                <button onClick={() => this.submit()}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.orders.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromCart: (id) => dispatch(actions.deleteFromCart(id)),
        submitOrder: (item) => dispatch(actions.submitOrder(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
