import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class DayTwo extends Component {
  render() {
    return (
      <Container>
     <Content>
          <List>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 3A</Text>
                <Text note>Latex Harvesting & Physiology</Text>
                <Text note numberOfLines={2}>Chairman: Dr James JACOB, RRI India</Text>
                <Text note numberOfLines={1}>8:30 - 10:00 / Venue: Room Daoukro</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 4</Text>
                <Text note>Technology</Text>
                <Text note numberOfLines={2}>Chairman: Prof. Zhou JIANNAN, CATAS, China</Text>
                <Text note numberOfLines={1}>8:30 - 10:15 / Venue: Room Lagunes</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 6</Text>
                <Text note>Biotechnology</Text>
                <Text note numberOfLines={2}>Chairman: Prof Sangaré Abdourahamane, CNRA Côte d'Ivoire</Text>
                <Text note numberOfLines={1}>8:30 - 10:00 / Venue: Room Lagunes</Text>
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
                <Text note numberOfLines={1}>10:00 - 10:30</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Tea - Coffee - Cocoa break</Text>
                <Text note numberOfLines={1}>10:30 - 11:00</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 3B</Text>
                <Text note>Latex Harvesting & Physiology</Text>
                <Text note numberOfLines={2}>Chairman: Olivier MARTIN, Côte d'Ivoire</Text>
                <Text note numberOfLines={1}>10:45 - 11:45 / Venue: Room Daoukro</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 5A</Text>
                <Text note>Socio Economy & Environment</Text>
                <Text note numberOfLines={2}>Chairman: Dr. A. I. AIGBODION, RRI, Nigeria</Text>
                <Text note numberOfLines={1}>11:00 - 12:15 / Venue: Room Lagunes</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 7A</Text>
                <Text note>Breeding</Text>
                <Text note numberOfLines={2}>Chairman: Dr. Zairossani Mohd Nor, MRB Malaysia</Text>
                <Text note numberOfLines={1}>11:00 - 12:00 / Venue: Room Lagunes</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 5B</Text>
                <Text note>Socio Economy & Environment</Text>
                <Text note numberOfLines={2}>Chairman: Dr Berté KAMA, Côte d'Ivoire</Text>
                <Text note numberOfLines={1}>11:00 - 12:15 / Venue: Room Lagunes</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Paralelle Sessions 7B</Text>
                <Text note>Breeding</Text>
                <Text note numberOfLines={2}>Chairman: Jerôme SAINTE-BEUVE, CIRAD France</Text>
                <Text note numberOfLines={1}>11:00 - 12:00 / Venue: Room Lagunes</Text>
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
                <Text note numberOfLines={1}>15:30 - 16:00</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Tea - Coffee - Cocoa break</Text>
                <Text note numberOfLines={1}>16:00 - 16:30</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Panel</Text>
                <Text note numberOfLines={2}>Chairman: Datuk Dr Abdul Aziz S.A. Kadir, Secretary General of the IRRDB</Text>
                <Text note numberOfLines={1}>11:00 - 12:00 / Venue: Room Lagunes</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Closing Ceremony</Text>
                <Text note numberOfLines={3}>Concluding remarks: Datuk Dr Abdul Aziz S.A. Kadir, Secretary General of the IRRDB</Text>
                <Text></Text>
                <Text note numberOfLines={3}>Closing address: Dr. YTE Wongbé, Director General, Centre National de Recherche Agronomique (CNRA)</Text>
                <Text></Text>
                <Text note numberOfLines={1}>17:15 - 17:30 / Venue: Room Lagunes</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Gala Dinner</Text>
                <Text note numberOfLines={1}>Venue: Heden Golf Hotel</Text>
                <Text note numberOfLines={1}>20:00 - 22:30</Text>
              </Body>
            </ListItem>

          </List>
        </Content>
      </Container>
    );
  }
}