import React, { Fragment } from 'react';
import firebase from 'firebase/app';
import {
  Card,
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// Will need to change this to uni instead
class LabList extends React.Component {
  state = {
    units: [],
  };

  componentDidMount() {
    let unitInfoStore = [];

    const unitSnapshot = firebase
      .firestore()
      .collection('units')
      .get()
      .then(snap => {
        snap.docs.forEach(doc => {
          unitInfoStore.push(doc.data());
        });
        this.setState({
          units: unitInfoStore,
        });
      });
  }

  render() {
    return (
      <div>
        <Header
          inverted
          as="h1"
          textAlign="align-left"
          style={{ padding: '1em 1em' }}
        >
          <Icon
            inverted
            name="handshake"
            style={{ testAlign: 'left' }}
            circular
          />
          <Header.Content>Units</Header.Content>
        </Header>

        <Header
          as="h3"
          inverted
          style={{ textAlign: 'center', posititon: 'adsolute', top: 100 }}
        >
          Select a Unit
        </Header>

        <Card.Group centered itemsPerRow={4}>
          {this.state.units.map(unit => (
            <Fragment>
              <Card
                as={Link}
                to={{
                  pathname: `/units/${unit.code}/allocate`,
                  state: { unit: unit },
                }}
                style={{ margin: '4rem' }}
              >
                <Image
                  src={
                    'https://picsum.photos/' +
                    (Math.floor(Math.random() * 900) + 800)
                  }
                  wrapped
                  ui={false}
                />
                <Card.Content textAlign="center">
                  <Card.Header>{unit.code}</Card.Header>
                  <Card.Meta>{unit.title}</Card.Meta>
                </Card.Content>
              </Card>
            </Fragment>
          ))}
        </Card.Group>
     <h2 class="ui header">Copyright @ Collaborator 2019W</h2>
     <p style={{color:'teal'}} as ="h4">Mubtasim Mahmud, Meherwan Singh Gill, Alex Ang, Niroo Arjuna, Simran Dhonchik, Niroo Arjuna</p>
     <p></p>
      </div>
    );
  }
}

export default LabList;
