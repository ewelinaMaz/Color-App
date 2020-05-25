import React from 'react';

function Footer(props) {
    const {paletteName, emoji} = props;
    return (
        <footer className='Palette-footer'>
            {paletteName}
            <span role='img' className='emoji'>{emoji}</span>
        </footer>
    )
}

export default Footer;