import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';

function Footer(props) {
    const {paletteName, emoji, classes} = props;
    return (
        <footer className={classes.PaletteFooter}>
            {paletteName}
            <span role='img' className={classes.emoji}>{emoji}</span>
        </footer>
    )
}

export default withStyles(styles) (Footer);