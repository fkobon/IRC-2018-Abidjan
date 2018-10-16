import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Left, Body, Right, Button, Accordion } from 'native-base';

const dataArray = [
    { title: "Option A", content: "Visit of the rubber estate (plantations & factory) of the Compagnie des Caoutchoucs du Pakidié de Dabou (CCP Dabou); and a small rubber holding." },
    { title: "Option B", content: "The quarantine site of clones introduced as part of the IRRDB multilateral clone exchange Program; and the International Coconut Genebank for Africa and the Indian Ocean." }
  ];

export default class DayThree extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
          <ListItem>
              <Body>
                <Text>Field trip</Text>
                <Text note numberOfLines={1}>02 options</Text>
              </Body>
            </ListItem>                                                                     
          </List>

          <Card padder>

            <CardItem header>
              <Text>Option 1</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Visit of the rubber estate (plantations & factory) of the Compagnie des Caoutchoucs du Pakidié de Dabou (CCP Dabou); and a small rubber holding.
                </Text>
              </Body>
            </CardItem>

            <CardItem header>
              <Text>Option 2</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  The quarantine site of clones introduced as part of the IRRDB multilateral clone exchange Program; and the International Coconut Genebank for Africa and the Indian Ocean.
                </Text>
              </Body>
            </CardItem>

          </Card>
          </Content>

        {/*<Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content> */}

      </Container>
    );
  }
}