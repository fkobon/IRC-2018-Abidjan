import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Body, Right, Button } from 'native-base';
import { WebBrowser } from 'expo';

export default class DayFive extends Component {

  state = {
    resultSixA: null,
  };

  render() {
    return (
      <Container>
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>Session 6: Biotechnology</Text>
          </ListItem>
          <ListItem>
          <Body>
            <Text>Chairman: Prof. Sangaré Abdourahamane</Text>
            <Text note numberOfLines={2}>CNRA, Côte d'Ivoire</Text>
          </Body>
          <Right>
            <Button transparent onPress={this._handlePressButtonSessionAsync}>
              <Icon type="FontAwesome" name="download" />
            </Button>
          </Right>
          </ListItem>
        </List>
      </Content>
      </Container>
    );
  }

  _handlePressButtonSessionAsync = async () => {
    let resultSixA = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/SESSION%206%20BIOTECHNOLOGY.pdf');
    this.setState({ resultSixA });
  };

}