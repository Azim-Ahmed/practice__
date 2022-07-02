import { makeStyles } from "@mui/styles";
import { Handle } from "react-flow-renderer";
import { Box } from "@mui/system";

const RectangleNode = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.customNodeWrapper}>
      <Handle
        type="target"
        position="top"
        className={classes.leftHandleStyle}
        connectable="true"
      />
      <Box display="flex" justifyContent={"space-around"}>
        <Box ml={`10px`}>{data.label}</Box>
      </Box>

      <Handle
        type="source"
        position="bottom"
        id="a"
        className={classes.rightHandleStyle}
      />
    </div>
  );
};

export default RectangleNode;

const useStyles = makeStyles((theme) => ({
  customNodeWrapper: {
    background: "rgba(223, 224, 255, 1)",
    boxShadow: "0px 4px 4px 0px #00000040",
    color: "black",
    padding: "20px 40px",
    borderRadius: "5px",
    minHeight: "20px",
    position: "relative",
  },
  leftHandleStyle: {
    background: "#555",
    padding: "3px",
  },

  rightHandleStyle: {
    background: "#555",
    padding: "3px",
  },
}));
