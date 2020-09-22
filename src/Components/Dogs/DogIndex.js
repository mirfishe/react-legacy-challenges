import React, {Component} from 'react';
import {Alert, Button, Container, Row, Col} from 'reactstrap';
import DogDisplay from './DogDisplay';

export default class Fetch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            image: '',
            statusForm: '',
            errForm: ''
        };

        this.fetchDogImage = this.fetchDogImage.bind(this);

    };


    componentDidMount() {

        this.fetchDogImage();

    };

    fetchDogImage() {

        // https://cors-anywhere.herokuapp.com
        // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
        const proxyURL = 'https://cors-anywhere.herokuapp.com/';

        // const URL = 'https://dog.ceo/dog-api/';

        const randomURL = 'https://dog.ceo/api/breeds/image/random';

        this.setState({statusForm: 'Fetching the dog image.'});
        this.setState({errForm: ''});

        fetch(proxyURL + randomURL)
        .then (response => {
            // console.log('response', response);
            // console.log('response.json()', response.json());
            return response.json();
        })
        .then (json => {
            // console.log('json', json);
            // console.log('json.message', json.message);
            // console.log('json.status', json.status);

            if (json.status === 'success') {
                this.setState({image: json.message});
                this.setState({statusForm: ''});
            } else {
                this.setState({errForm: 'Failed to fetch dog image.'});
            };

        })
        .catch(err => {
            console.log(err);
            this.setState({errForm: err});
        })

    };

    render() {
        return(
            <Container>
                <Row className="m-2">
                    <Col className="m-2">
                    <Button  className="m-2" type="submit" color="primary" onClick={this.fetchDogImage}>Fetch New Image</Button>
                    {this.state.statusForm !== '' ? <Alert color="info">{this.state.statusForm}</Alert> : ''}
                    {this.state.errForm !== '' ? <Alert color="danger">{this.state.errForm}</Alert> : ''}
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col className="m-2">
                <DogDisplay url={this.state.image} />
                </Col>
                </Row>
            </Container>
        );
    };
};