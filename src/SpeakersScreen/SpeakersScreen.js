import React from "react";
import { View,TouchableHighlight} from "react-native";
import { Container, Header, Left, Button, Icon, Body, Title, Right, Text, H1, H2, Content, List, ListItem, Thumbnail, Subtitle, Card, CardItem, Separator} from "native-base";




export default class SpeakersScreen extends React.Component {


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
      <Title>Speakers</Title>
      <Subtitle>IRC 2018 Abidjan</Subtitle>
      </Body>
      <Right />
    </Header>
    <Content>

    <List>


        <Separator bordered>
         <Text>KEYNOTE SPEAKERS</Text>
        </Separator>

        <ListItem avatar>
          <Left>
              <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
          </Left>
          <Body>
            <Text>Dr. Soumaila BREDOUMI</Text>
            <Text note>Director General of productions and food security</Text>
          </Body>
          <Right>

          <Button transparent primary>
             <Text> Read More </Text>
           </Button>
          </Right>
        </ListItem>

        <ListItem avatar>
          <Left>
              <Thumbnail source={ require('../img/speakers/Salvatore_Pinizzotto.png') } />
          </Left>
          <Body>
            <Text>Salvadore Pinizzotto</Text>
            <Text note>Secretary General of IRCSG</Text>
          </Body>
          <Right>

          <Button  transparent>
             <Text> Read More </Text>
           </Button>
          </Right>
        </ListItem>


        <ListItem avatar>
          <Left> 
              <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
          </Left>
          <Body>
            <Text>Mr. Tan Tee YONG</Text>
            <Text note>General Manager of Technnical Department</Text>
          </Body>
          <Right>

          <Button  transparent primary>
             <Text> Read More </Text>
           </Button>
          </Right>
        </ListItem>

        <ListItem avatar>
          <Left>
              <Thumbnail source={ require('../img/speakers/Mitsutoshi_Saeki.png') } />
          </Left>
          <Body>
            <Text>Mitsutoshi Saeki</Text>
            <Text note>Director Rubber Commodities Derivaties - Singapore Exchange</Text>
          </Body>
          <Right>

          <Button  transparent primary>
             <Text> Read More </Text>
           </Button>
          </Right>
        </ListItem>

        <ListItem avatar>
          <Left>
              <Thumbnail source={ require('../img/speakers/Dar_Wong.png') } />
          </Left>
          <Body>
            <Text>Dar Wong </Text>
            <Text note>Principal Consultant APSRI in Singapore</Text>
          </Body>
          <Right>

          <Button  transparent primary>
             <Text> Read More </Text>
           </Button>
          </Right>
        </ListItem>



      <Separator bordered>
       <Text>SPEAKERS</Text>
      </Separator>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Dr.Ebenezer_Abolagba.png') } />
        </Left>
        <Body>
          <Text>Dr Ebenezer Abolagba</Text>
          <Text note>President</Text>
        </Body>
        <Right>
         <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>


      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/DR_Anura_Dissanayake.png') } />
        </Left>
        <Body>
          <Text>Dr Anura Dissanayake</Text>
          <Text note>Vice President</Text>
        </Body>
        <Right>
        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Mrs._Arom_Rodesuchit.png') } />
        </Left>
        <Body>
          <Text>Mrs. Arom Rodessuchit</Text>
          <Text note>Member</Text>
        </Body>
        <Right>
        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>


      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Dr_Olivier_Atsin.png') } />
        </Left>
        <Body>
          <Text>Dr. Olivier Atsin</Text>
          <Text note>Member</Text>
        </Body>
        <Right>
        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>


      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Ernie_C._Camacho.png') } />
        </Left>
        <Body>
          <Text>Ernie C. Camacho</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Dr_Christian_Cilas.png') } />
        </Left>
        <Body>
          <Text>Dr Christian Cilas</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Dr._Moussa_Diarrassouba.png') } />
        </Left>
        <Body>
          <Text>Dr Moussa Diarrassouba</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Digbe_Thomas.png') } />
        </Left>
        <Body>
          <Text>Digbe Thomas</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Dr._Elabo_Agnyman.png') } />
        </Left>
        <Body>
          <Text>Dr Elabo Agnyman Angelin Aliathe</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Fagbemi_Emmanuel_Adeleke.png') } />
        </Left>
        <Body>
          <Text>Fagbemi Emmanuel Adeleke </Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
        </Left>
        <Body>
          <Text>Dr. Esekhade U. T</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>


      <ListItem avatar>
        <Left>
        <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
        </Left>
        <Body>
          <Text>Huang Guixiu</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
        </Left>
        <Body>
          <Text>Kenneth Omokhafe</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/icons8-femme.png') } />
        </Left>
        <Body>
          <Text>Dr Kavitha K. Mydin</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Pr_Kouakou_NGoran.png') } />
        </Left>
        <Body>
          <Text>Pr Kouakou NGoran David Vincent</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr._Kudaligama_K.V.V.S..png') } />
        </Left>
        <Body>
          <Text>Dr Kudaligama K. V. V. S.</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/LI_Boxun.png') } />
        </Left>
        <Body>
          <Text>LI Boxun</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr._Dejun_Li.png') } />
        </Left>
        <Body>
          <Text>Dr Dejun Li </Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Liu_Xianbao.png') } />
        </Left>
        <Body>
          <Text>Liu Xianbao</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr._Md._Mahbubur_Rahman.png') } />
        </Left>
        <Body>
          <Text>Dr Md. MahBubur Rahman</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
          <Text> Read More </Text>
        </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Dr._Md._Mahbubur_Rahman.png') } />
        </Left>
        <Body>
          <Text>Dr Md. MahBubur Rahman</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Maria_Kolesnikova-Allen.png') } />
        </Left>
        <Body>
          <Text>Maria Kolesniskova-Allen</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
        </Left>
        <Body>
          <Text>Dr Chinye Samuel Mesike</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>


      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Ms_Sashika_Nakandala.png') } />
        </Left>
        <Body>
          <Text>Ms Sashika Nakandala</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr._C._Narayanan.png') } />
        </Left>
        <Body>
          <Text>Dr C. Narayanan </Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr._Nguyen_Anh_Nghia.png') } />
        </Left>
        <Body>
          <Text>Dr Nguyen Anh Nghia</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr_Nicholas_O._Ogbebor.png') } />
        </Left>
        <Body>
          <Text>Dr Nicholas O. Ogbebor </Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Okundia_Rex_Osabuogbe.png') } />
        </Left>
        <Body>
          <Text>Okundia Rex Osabuogbe</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>



      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/icons8-femme.png') } />
        </Left>
        <Body>
          <Text>Dr Pisamai Chantuma</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>



      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Florence_M._Umoh.png') } />
        </Left>
        <Body>
          <Text>Florence M Umoh </Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr._Vinoth_Thomas.png') } />
        </Left>
        <Body>
          <Text>Dr Vinoth Thomas</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../img/speakers/Dr._Wahounou_Polie_Jean.png') } />
        </Left>
        <Body>
          <Text>Dr Wahounou Polie Jean</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr._Wasana_Wijesuriya.png') } />
        </Left>
        <Body>
          <Text>Dr Wasana Wijesuriya</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>



      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Yang_Changjin.png') } />
        </Left>
        <Body>
          <Text>Yang Changjin</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Yao_Kouakou_Alban_Prosper.png') } />
        </Left>
        <Body>
          <Text>Yao Kouakou Alban Prosper</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Zhang_Fuquan.png') } />
        </Left>
        <Body>
          <Text>Zhang Fuquan</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>


      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
        </Left>
        <Body>
          <Text>Dato Dr Zairossani Mohd</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
        </Left>
        <Body>
          <Text>Dr Obouayeba Samuel</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
        </Left>
        <Body>
          <Text>Diogo Esperante</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr._C._Kuruvilla_Jacob.png') } />
        </Left>
        <Body>
          <Text>Dr C. Kuruvilla Jacob</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>


      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr._Nor_Mayati_Che_Husin.png') } />
        </Left>
        <Body>
          <Text>Dr Nor Mayati Che Husin</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr._Muhammad_Akbar_Abdul_Ghaffar.png') } />
        </Left>
        <Body>
          <Text>Dr Muhammad Akbar Adbul Ghaffar</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Fagbemi_Emmanuel_Adeleke.png') } />
        </Left>
        <Body>
          <Text>Dr Nyaka Ngobisa Aurelie Irene Claire Epse Mandegue</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
        </Left>
        <Body>
          <Text>Essehi Jean Lopez</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Adou_Bini_Yao_Christophe.png') } />
        </Left>
        <Body>
          <Text>Adou Bini Yao Christophe</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Ballo_Esperence_Kouadio.png') } />
        </Left>
        <Body>
          <Text>Ballo Espérence Kouadio</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Kouakou_N._K._Pulcherie.png') } />
        </Left>
        <Body>
          <Text>Kouakou N. K. Pulcherie</Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Zele_Bohui_Fabien_Marc.png') } />
        </Left>
        <Body>
          <Text>Zele Bohui Fabien Marc </Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/icons8-homme.png') } />
        </Left>
        <Body>
          <Text>Gnagne Yedoh Michel </Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

      <ListItem avatar>
        <Left>
            <Thumbnail source={ require('../img/speakers/Dr_Desire_Pokou.png') } />
        </Left>
        <Body>
          <Text>Dr  Desire Pokou </Text>
          <Text note>Member</Text>
        </Body>
        <Right>

        <Button  transparent primary>
           <Text> Read More </Text>
         </Button>
        </Right>
      </ListItem>

    </List>


   </Content>

	  </Container>
	);
  }
}
