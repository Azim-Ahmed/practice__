import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "2rem",
    },
    outer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "90%",
        position: "relative",
    },
    inner: {
        marginLeft: "2rem",
        marginTop: "5rem",
        width: "50%",
        height: "100%",
        position: "absolute",
    },
    row: {
        color: "black",
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    col: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        justifyContent: "center",
    },
    // head: {
    //     color: "#373482",
    // },
}));

export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <div style={{ flex: 7 }} className={classes.col}>
                    <motion.img
                        whileHover={{
                            position: "relative",
                            zIndex: 1,
                            scale: [1, 1.1, 1.2, 1.3],
                            rotate: [0, 10, -10, 0],
                            filter: "invert(100%)",
                            transition: {
                                duration: 0.2,
                            },
                        }}
                        whileTap={{
                            position: "relative",
                            zIndex: 1,
                            scale: [1, 1.1, 1.2, 1.3],
                            rotate: [0, 10, -10, 0],
                            filter: "invert(100%)",
                            transition: {
                                duration: 0.2,
                            },
                        }}
                        style={{ boxShadow: "rgb(109 108 114 / 43%) 4px 6px 20px 0px" }}
                        width="90%"
                        height="90%"
                        src="https://images.unsplash.com/photo-1592500213755-7f48adc164a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="landing"
                    />
                </div>
                <div style={{ flex: 5 }} className={classes.col}>
                    <Typography variant="h5" className={classes.head}>
                        Do Shopping Like Never Before
                    </Typography>
                </div>
            </div>
        </div>
    );
}
