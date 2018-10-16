import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Body, Right, Button } from 'native-base';
import { WebBrowser } from 'expo';

export default class DayFour extends Component {

  state = {
    resultFourA: null,
  };

  render() {
    return (
      <Container>
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>Session 4: Technology</Text>
          </ListItem>
          <ListItem>
          <Body>
            <Text>Chairman: Prof. Zhou JIANNAN</Text>
            <Text note numberOfLines={2}>CATAS, China</Text>
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
    let resultFourA = await WebBrowser.openBrowserAsync('https://fkobon.ci/irrdb_assets/files/SESSION%204%20TECHNOLOGY.pdf');
    this.setState({ resultFourA });
  };

}