import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class DayFive extends Component {
  render() {
    return (
      <Container>
          <List>
          <ListItem>
              <Body>
                <Text>IRRDB Board meeting</Text>
                <Text note numberOfLines={1}>9:00 - 14:00 / Hall A</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>                                                                      
          </List>
      </Container>
    );
  }
}