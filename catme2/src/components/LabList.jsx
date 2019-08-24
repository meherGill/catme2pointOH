import React from 'react';
import firebase from 'firebase/app';
import { Card, Image, Grid } from 'semantic-ui-react';

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
      <Grid centered columns={2}>
        {this.state.units.map(unit => (
          <Card.Group>
            <Card>
              <Image src="https://picsum.photos/200" wrapped ui={false} />
              <Card.Content textAlign="center">
                <Card.Header>{unit.code}</Card.Header>
                <Card.Meta>{unit.title}</Card.Meta>
              </Card.Content>
            </Card>
            <Card>
              <Image src="https://picsum.photos/200" wrapped ui={false} />
              <Card.Content textAlign="center">
                <Card.Header>{unit.code}</Card.Header>
                <Card.Meta>{unit.title}</Card.Meta>
              </Card.Content>
            </Card>
            <Card>
              <Image src="https://picsum.photos/200" wrapped ui={false} />
              <Card.Content textAlign="center">
                <Card.Header>{unit.code}</Card.Header>
                <Card.Meta>{unit.title}</Card.Meta>
              </Card.Content>
            </Card>
          </Card.Group>
        ))}
      </Grid>
    );
  }
}

export default LabList;
