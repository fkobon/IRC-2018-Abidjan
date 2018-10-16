import React from "react";
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Text, Tab, Tabs, ScrollableTab, Subtitle, TabHeading} from "native-base";

import SessionOne from './SessionOne';
import SessionTwo from './SessionTwo';
import SessionThree from './SessionThree';
import SessionFour from './SessionFour';
import SessionFive from './SessionFive';
import SessionSix from './SessionSix';
import SessionSeven from './SessionSeven';

export default class AbstractScreen extends React.Component {

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
						<Title>Abstracts</Title>
						<Subtitle>IRC 2018 Abidjan</Subtitle>
					</Body>
					<Right />
				</Header>
					<Tabs renderTabBar={()=> <ScrollableTab />}>
						<Tab heading={ <TabHeading><Text>Session 1</Text></TabHeading>}>
							<SessionOne />
						</Tab>
						<Tab heading={ <TabHeading><Text>Session 2</Text></TabHeading>}>
							<SessionTwo />
						</Tab>
						<Tab heading={ <TabHeading><Text>Session 3</Text></TabHeading>}>
							<SessionThree />
						</Tab>
						<Tab heading={ <TabHeading><Text>Session 4</Text></TabHeading>}>
							<SessionFour />
						</Tab>
						<Tab heading={ <TabHeading><Text>Session 5</Text></TabHeading>}>
							<SessionFive />
						</Tab>
						<Tab heading={ <TabHeading><Text>Session 6</Text></TabHeading>}>
							<SessionSix />
						</Tab>
						<Tab heading={ <TabHeading><Text>Session 7</Text></TabHeading>}>
							<SessionSeven />
						</Tab>
					</Tabs>
			</Container>
		);
	}
}
