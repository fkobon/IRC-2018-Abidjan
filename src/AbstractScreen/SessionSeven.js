import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Body, Right, Button } from 'native-base';
import { Constants, WebBrowser } from 'expo';

// FileSystem.downloadAsync(
//   'http://techslides.com/demos/sample-videos/small.mp4',
//   FileSystem.documentDirectory + 'small.mp4'
// )
//   .then(({ uri }) => {
//     console.log('Finished downloading to ', uri);
//   })
//   .catch(error => {
//     console.error(error);
//   });

export default class DayFour extends Component {

  state = {
    resultSevenA: null,
    resultSevenB: null,
  };

  render() {
    return (
      <Container>
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>Session 7A: Breeding</Text>
          </ListItem>
          <ListItem>
          <Body>
            <Text>Chairman: Dr. Zairossani Mohd Nor</Text>
            <Text note numberOfLines={1}>MRB Malaysia</Text>
          </Body>
          <Right>
            <Button transparent onPress={this._handlePressButtonSessionAAsync}>
              <Icon type="FontAwesome" name="download" />
            </Button>
          </Right>
          </ListItem>
  
          <ListItem itemDivider>
            <Text>Session 7B: Breeding</Text>
          </ListItem>  
          <ListItem>
          <Body>
            <Text>Chairman: DJerôme SAINTE-BEUVE</Text>
            <Text note numberOfLines={1}>CIRAD France</Text>
          </Body>
          <Right>
            <Button transparent onPress={this._handlePressButtonSessionBAsync}>
              <Icon type="FontAwesome" name="download" />
            </Button>
          </Right>
          </ListItem>
        </List>
      </Content>
      </Container>
    );
  }

  _handlePressButtonSessionAAsync = async () => {
    let resultSevenA = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/SESSION%207A%20BREEDING.pdf');
    this.setState({ resultSevenA });
  };

  _handlePressButtonSessionBAsync = async () => {
    let resultSevenB = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/SESSION%207B%20BREEDING.pdf');
    this.setState({ resultSevenB });
  };

}