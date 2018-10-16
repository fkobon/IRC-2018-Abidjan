import React from "react";
import { StatusBar } from "react-native";``
import { Container, Header, Left, Button, Icon, Body, Title, H1, Right, Content, Accordion, Subtitle } from "native-base";

const dataArray = [
    { title: "2nd Annoucement", content: 'Côte d’Ivoire, on the West Coast of Africa, the leader of the continent natural rubber industry, will host the 2018 IRRDB International Rubber Conference (22nd & 23rd October), followed by a full day field visit (24th October). The Meeting of the IRRDB Committee of Directors will be held on the 25th followed by the Meeting of the Board on the 26th. The Sofitel Hotel Ivoire in Abidjan will be the venue. This year, the NR community will reflect and share experiences and insights on the theme “Natural Rubber Industry: An Asset for socio-economic development and the preservation of the environment”.  Directors, CEOs, researchers from IRRDB member institutes, manufacturers, policy makers, civil society and other stakeholders directly or indirectly connected to the NR industry from all member countries are invited to participate in the IRC 2018 and present papers and/or posters. You are invited to register for the IRC and the full day field visit. Registration is free of charge, compliments of the Government and the NR industry of Cote d’Ivoire.' },
    { title: "Importante Date for Paper Presentations", content: "The deadline for abstract submission is on 20 July 2018 and 15 August 2018 for full text submission (see author instructions below)." },
    { title: "Language", content: "French is the official language of Côte d'Ivoire. However, except for the opening ceremony where French-English translation will be provided, the Conference will be in English." },
    { title: "Weather", content: "In October the average temperature in Abidjan is around 27 °C (80 °F) with a relative humidity of 78%. Occasional rains are recorded (42% probability of rain)" },
    { title: "Visa Information", content: "Nationalities subject to entry visa can obtain it at the closest embassy or consulate of Côte d’Ivoire.  However, for the participants without a diplomatic representation of Cote d’Ivoire in their countries, visa on arrival can be facilitated on request. The fee for a short-term visa on arrival is of US$ 80 to be paid at the immigration counter.  Please note that visa on arrival is strictly subject to prior approval of the Authorities of immigration." },
    { title: "Health Vaccination", content: "Upon arrival, participants will have to show to airport health authorities a valid yellow fever vaccination certificate before proceeding to immigration." },
    { title: "Airport Pick-Up", content: "The Organizing Committee staff will meet participants on arrival and arrange their transfer from the airport to their respective hotels. In that respect, please communicate your travel itinerary to the Committee. " },
    { title: "Cuurency", content: "The official currency of Côte d'Ivoire is the CFA franc (F.CFA). The exchange rates are: 1€=655.96 F.CFA (fixed rate); 1$US=559.21 F.CFA; 1£=751.13 F.CFA (rates of $US and £ subject to fluctuation). " }
  ];

export default class InformationsScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Informations</Title>
            <Subtitle>IRC 2018 Abidjan</Subtitle>
          </Body>
          <Right />
        </Header>

        <H1 style={{margin: 10}}>Prepare your travel</H1>
        
        <Content padder>
          <Accordion dataArray={dataArray}/>
        </Content>
      </Container>
    );
  }
}
