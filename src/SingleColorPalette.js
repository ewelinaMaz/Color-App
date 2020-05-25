import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Nav from './Navbar';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette,
            this.props.colorId);
        this.state = { format: 'hex' };
        this.changeFormat = this.changeFormat.bind(this);
    }
    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        //return all shades of given color
        return shades.slice(1);
    }
    changeFormat(val) {
        this.setState({ format: val })
    }
    render() {
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showLink={false}
            />
        ));
        return (
            <div className='SingleColorPalette Palette'>
                <Nav handleChange={this.changeFormat}
                    showingAllColors={false} />
                <div className='Palette-colors'>
                    {colorBoxes}
                    <div className='go-back ColorBox'>
                        <Link className='back-button' 
                        exact to={`/palette/${id}`}>Go back</Link>
                    </div>
                </div>
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;