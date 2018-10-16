import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Body, Right, Button } from 'native-base';
import { WebBrowser } from 'expo';

export default class DayThree extends Component {

  state = {
    resultThreeA: null,
    resultThreeB: null,
  };

  render() {
    return (
      <Container>
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>Session 3A: Latex Harvesting & Physiology</Text>
          </ListItem>
          <ListItem>
          <Body>
            <Text>Chariman: Dr James JACOB</Text>
            <Text note numberOfLines={2}>RRI India</Text>
          </Body>
          <Right>
            <Button transparent onPress={this._handlePressButtonSessionAAsync}>
              <Icon type="FontAwesome" name="download" />
            </Button>
          </Right>
          </ListItem>
  
          <ListItem itemDivider>
            <Text>Session 3B: Latex Harvesting</Text>
          </ListItem>  
          <ListItem>
          <Body>
            <Text>Chairman: Olivier MARTIN</Text>
            <Text note numberOfLines={2}>Côte d'Ivoire</Text>
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
    let resultThreeA = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/Latex%20Harvesting%203A.pdf');
    this.setState({ resultThreeA });
  };

  _handlePressButtonSessionBAsync = async () => {
    let resultThreeB = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/Latex%20Harvesting%203B.pdf');
    this.setState({ resultThreeB });
  };

}