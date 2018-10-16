import React, { Component } from 'react';
import { Container, Header, H2, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class DayOne extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
          <ListItem>
              <Body>
                <Text>Registration</Text>
                <Text note numberOfLines={1}>7:30 - 8:30</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Opening Ceremony</Text>
                <Text note numberOfLines={1}>8:30 - 9:30</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Tea - Coffee - Cocoa break</Text>
                <Text note numberOfLines={1}>9:30 - 10:00</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Plenary keynot session</Text>
                <Text note numberOfLines={2}>Chairman: Datuk Dr Abdul Aziz S.A. Kadir, Secretary General of the IRRDB</Text>
                <Text note numberOfLines={1}>10:00 - 12:30</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Lunch Break</Text>
                <Text note numberOfLines={6}>12:30 - 14:00</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 1A</Text>
                <Text note>Agronomy & Good Practices</Text>
                <Text note numberOfLines={2}>Chairman: Dr. Eric GOHET, CIRAD France</Text>
                <Text note numberOfLines={1}>14:00 - 15:15 / Venue: Salle des Fêtes</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 2A</Text>
                <Text note>Plant Protectioon</Text>
                <Text note numberOfLines={2}>Chairman: Dr Eugène EHABE, IRAD Cameroon</Text>
                <Text note numberOfLines={1}>14:00 - 15:30 / Venue: Room Lagunes</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Discussion</Text>
                <Text note numberOfLines={1}>15:15 - 15:45</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Tea - Coffee - Cocoa break</Text>
                <Text note numberOfLines={1}>15:45 - 16:00</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 1B</Text>
                <Text note>Agronomy & Good Practices</Text>
                <Text note numberOfLines={2}>Chairman: Mak SOPHEAVEASNA, RRI Cambodia</Text>
                <Text note numberOfLines={1}>16:00 - 17:45 / Venue: Salle des Fêtes</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 2B</Text>
                <Text note>Plan Protectioon</Text>
                <Text note numberOfLines={2}>Chairman: Phan Thanh DUNG, RRI Vietnam</Text>
                <Text note numberOfLines={1}>16:00 - 17:15 / Venue: Room Lagunes</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Discussion</Text>
                <Text note numberOfLines={1}>17:15 - 17:47</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}