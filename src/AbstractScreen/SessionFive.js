import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Body, Right, Button } from 'native-base';
import { WebBrowser } from 'expo';

export default class DayFive extends Component {

  state = {
    resultFiveA: null,
    resultFiveB: null,
  };

  render() {
    return (
      <Container>
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>Session 5A: Socio Economy & Environment</Text>
          </ListItem>
          <ListItem>
          <Body>
            <Text>Chairman: Dr. A. I. AIGBODION</Text>
            <Text note numberOfLines={2}>RRI Nigeria</Text>
          </Body>
          <Right>
            <Button transparent onPress={this._handlePressButtonSessionAAsync}>
              <Icon type="FontAwesome" name="download" />
            </Button>
          </Right>
          </ListItem>
  
          <ListItem itemDivider>
            <Text>Session 5B: Socio Economy & Environment</Text>
          </ListItem>  
          <ListItem>
          <Body>
            <Text>Chairman: Dr Berté KAMA</Text>
            <Text note numberOfLines={1}>Côte d'Ivoire</Text>
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
    let resultFiveA = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/Session%205A%20SOCIO%20ECO%20ENVIRONMENT.pdf');
    this.setState({ resultFiveA });
  };

  _handlePressButtonSessionBAsync = async () => {
    let resultFiveB = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/Session%205B%20SOCIO%20ECO%20&%20ENVIRONMENT.pdf');
    this.setState({ resultFiveB });
  };

}