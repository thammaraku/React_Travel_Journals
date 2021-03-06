import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

import Marker from '../Marker';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const GOOGLE_MAPS_API_KEY = "AIzaSyAX5jbsLY_jCzc3r7ljL-b62ISJ0Er1MM0"
// const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API;

class Maps extends Component {

    static defaultProps = {
        center: {
            lat: 30.267153,
            lng: -97.743060
        },
        zoom: 7,
        // mapTypeId: 'satellite',
        place: 'Austin'
    };

    static propTypes = {
        place: PropTypes.string.isRequired,
        center: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div style={{ height: '600px', width: '100%', padding: "10px" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
                    // defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    // onChildMouseEnter={this.onChildMouseEnter}
                    // onChildMouseLeave={this.onChildMouseLeave}
                    center={this.props.center}

                >
                    {/* <AnyReactComponent
                        text={this.props.place}
                    /> */}

                    <Marker
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                    />
                    {/* <Marker
                        lat={15.8700}
                        lng={100.9925}
                    />
<<<<<<< HEAD
=======
                    <Marker
                        lat={19.61921214756764}
                        lng={102.65882834190207}
                    /> */}


>>>>>>> origin/main
                </GoogleMapReact>
            </div>
        );
    }
}

export default Maps;
