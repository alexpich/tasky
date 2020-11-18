import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  linkButton: {
    color: theme.palette.primary.contrastText,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link className={classes.link} to="/">
          <Button className={classes.linkButton}>Tasky</Button>
        </Link>
        <Link className={classes.link} to="/dashboard">
          <Button className={classes.linkButton}>Dashboard</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
