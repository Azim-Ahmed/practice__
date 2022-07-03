import React from "react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import Product from "./Product/Product";
import { Button, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CancelIcon from "@material-ui/icons/Cancel";
import { deleteFromCart, submitOrder, submitForm } from "../../store/actions/orderActions";
import { useStyles } from "./imports";

function Cart(props) {
    const classes = useStyles();
    let sum = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const price = Number(props.cart[i].price);
        sum = sum + price;
    }
    return (
        <motion.div className={classes.cart}>
            <div className={classes.header}>
                <div className={classes.heading}>
                    <p style={{ margin: 0, fontFamily: "'Bebas Neue', cursive" }}>Your Cart</p>
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.row}>
                    <div className={`${classes.col_prod} ${classes.labels}`}>
                        <p>PRODUCTS</p>
                    </div>
                    <div
                        style={{}}
                        className={`${classes.col_price} ${classes.labels} ${classes.label_price} `}
                    >
                        <p>PRICE</p>
                    </div>
                </div>
            </div>
            <div className={classes.product}>
                {props.cart.map(function (x, index) {
                    return (
                        <div className={classes.row} style={{ marginTop: "2rem" }}>
                            <div className={` ${classes.products} ${classes.col_prod}`}>
                                <Product
                                    name={x.name}
                                    brand={x.brand}
                                    size={props.sizes[index]}
                                    image={x.imageLink}
                                />
                            </div>
                            <div className={classes.col_price}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <div className={classes.price}>{x.price}</div>
                                    <div>
                                        <IconButton
                                            style={{ color: "black" }}
                                            onClick={() => props.deleteFromCart(x._id)}
                                        >
                                            <CancelIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {props.cart.length > 0 ? (
                <div className={classes.placeOrder}>
                    <div className={classes.col}></div>
                    <div className={classes.subTotal}>
                        <div className={classes.subText}>
                            SUBTOTAL
                            <span
                                style={{
                                    marginLeft: "0.6rem",
                                    color: "black",
                                    fontFamily: " 'Jost', sans-serif",
                                    fontSize: "1.4rem",
                                }}
                            >
                                {sum}
                            </span>
                        </div>
                        <div>
                            <Button
                                style={{ width: "45%", backgroundColor: "black", color: "white" }}
                                onClick={() => props.submitForm()}
                            >
                                Place Order <ChevronRightIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            ) : null}
        </motion.div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.orders.cart,
        sizes: state.orders.sizes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromCart: (id) => dispatch(deleteFromCart(id)),
        submitForm: () => dispatch(submitForm()),
        submitOrder: (item) => dispatch(submitOrder(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
