import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Body, Right, Button } from 'native-base';
import { WebBrowser } from 'expo';

export default class DayTwo extends Component {

  state = {
    resultTwoA: null,
    resultTwoB: null,
  };

  render() {
    return (
      <Container>
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>Sessions 2A : Plan Protection</Text>
          </ListItem>
          <ListItem>
          <Body>
            <Text>Chairman: Dr Eugène EHABE</Text>
            <Text note numberOfLines={2}>IRAD Cameroon</Text>
          </Body>
          <Right>
            <Button transparent onPress={this._handlePressButtonSessionAAsync}>
              <Icon type="FontAwesome" name="download" />
            </Button>
          </Right>
          </ListItem>
  
          <ListItem itemDivider>
            <Text>Sessions 2B : Plan Protection</Text>
          </ListItem>  
          <ListItem>
          <Body>
            <Text>Chairman: Phan Thanh DUNG</Text>
            <Text note numberOfLines={2}>RRI Vietnam</Text>
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
    let resultTwoA = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/Abstract%20plant%20protection%202A.pdf');
    this.setState({ resultTwoA });
  };

  _handlePressButtonSessionBAsync = async () => {
    let resultTwoB = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/Abstract%20plant%20protection%202B.pdf');
    this.setState({ resultTwoB });
  };

}