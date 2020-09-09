import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import { ListItemAvatar } from "@material-ui/core";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      deletingId: "",
    };
  }
  openDialog = (id) => {
    this.setState({ open: true, deletingId: id });
  };
  closeDialog = () => {
    this.setState({ open: false, deletingId: "" });
  };
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  handleDelete = () => {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  };

  render() {
    const { palettes, classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.Title}>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div>
            <TransitionGroup className={classes.palettes}>
              {palettes.map((palette) => (
                <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                  <MiniPalette
                    {...palette}
                    handleClick={this.goToPalette}
                    openDialog={this.openDialog}
                    //handleDelete={deletePalette}
                    key={palette.id}
                    id={palette.id}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
        <Dialog
          onClose={this.closeDialog}
          open={open}
          aria-labelledby="delete-dialog-title"
        >
          <DialogTitle id="delete-dialog-title">
            Delete this palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
