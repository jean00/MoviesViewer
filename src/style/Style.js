import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  Title: {
    marginRight: "20px",
    marginTop: "10px;",
  },

  IconButton: {
    marginTop: "15px",
  },

  CardGrid: {
    padding: "20px 0",
    paddingTop: "5%",
    display: "flex",
  },

  CardMedia: {
    height: "380px",
  },

  Card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  CardContent: {
    backgroundColor: "#3f51b5",
    color: "white",
    flexGrow: 1,
  },
}));

export default useStyle;
