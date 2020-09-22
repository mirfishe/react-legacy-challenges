import React from 'react';

export default function DogDisplay(props) {
    return(
            <img src={props.url} alt="Random Dog" />
    );
};