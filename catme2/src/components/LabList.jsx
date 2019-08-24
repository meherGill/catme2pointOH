import React, { Fragment } from 'react';
import firebase from 'firebase/app';
import { Card, Image } from 'semantic-ui-react';
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
      <Card.Group centered itemsPerRow={3}>
        {this.state.units.map(unit => (
          <Fragment>
            <Card as={Link} to="/allocate">
              <Image src="https://picsum.photos/200" wrapped ui={false} />
              <Card.Content textAlign="center">
                <Card.Header>{unit.code}</Card.Header>
                <Card.Meta>{unit.title}</Card.Meta>
              </Card.Content>
            </Card>
          </Fragment>
        ))}
      </Card.Group>
      <div>
        <br />
        <br />
      </div>
    );
  }
}

export default LabList;
