import React from "react";
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Text, Tab, Tabs, ScrollableTab, Subtitle, TabHeading} from "native-base";

import DayOne from './DayOne';
import DayTwo from './DayTwo';
import DayThree from './DayThree';
import DayFour from './DayFour';

import styles from "./styles";

export default class ScheduleScreen extends React.Component {

	render() {

		return (
			<Container style={styles.container}>
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
						<Title>Schedule</Title>
						<Subtitle>IRC 2018 Abidjan</Subtitle>
					</Body>
					<Right />
				</Header>
					<Tabs renderTabBar={()=> <ScrollableTab />}>
						<Tab heading={ <TabHeading><Text>Oct. 22nd, 2018</Text></TabHeading>}>
							<DayOne />
						</Tab>
						<Tab heading={ <TabHeading><Text>Oct. 23rd, 2018</Text></TabHeading>}>
							<DayTwo />
						</Tab>
						<Tab heading={ <TabHeading><Text>Oct. 24th, 2018</Text></TabHeading>}>
							<DayThree />
						</Tab>
						<Tab heading={ <TabHeading><Text>Oct. 25th-26th, 2018</Text></TabHeading>}>
							<DayFour />
						</Tab>
					</Tabs>
			</Container>
		);
	}
}
