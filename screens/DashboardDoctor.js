import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Button, Block, Text, Input, theme } from "galio-framework";

import { materialTheme, products, Images, tabs } from "../constants";
import {
  Select,
  Icon,
  Header,
  Product,
  Switch,
  Tabs,
  HorizontalListItem,
} from "../components";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

const Components = (props) => {
  const cardBox = () => {
    return (
      <Block style={styles.listBox}>
        <Text style={[styles.headerText, { paddingTop: 0 }]} size={21} bold>
          Current Active Case List
        </Text>
        <Text style={styles.mutedText} size={7} muted bold>
          Admitted on 02/02/2021
        </Text>
        <Text style={styles.headerText} size={13}>
          Total case 50| Next visit on 5:00pm
        </Text>

        <TouchableWithoutFeedback>
          <Block flex flexDirection="row">
            <Text style={styles.headerText} size={13}>
              View Details
            </Text>
            <Icon
              name="chevron-right"
              family="font-awesome"
              color={theme.COLORS.MUTED}
              size={14}
              style={styles.icons}
            >
              {" "}
            </Icon>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  };
  const scheduleItem = () => {
    return (
      <Block flex style={styles.scheduleItem}>
        <Block flex flexDirection="row" style={styles.insideSchduleItem}>
          <Block flex={1.6} flexDirection="column" style={styles.flexCardItem}>
            <Text bold size={20} color="#6695FF" style={styles.pText}>
              20<Text size={11}>th</Text>
            </Text>
            <Text bold size={20} color="#6695FF" style={styles.pText}>
              Feb
            </Text>
            <Text bold size={11} color="#6695FF" style={styles.pText}>
              11:00 am
            </Text>
          </Block>
          <Block flex={5} flexDirection="column">
            <Text
              size={21}
              color="white"
              bold
              style={{ marginLeft: theme.SIZES.BASE }}
            >
              Heart surgery
            </Text>
            <Block flex flex={5} flexDirection="row">
              <TouchableWithoutFeedback>
                <Text color="white" style={styles.underLineText}>
                  View case detail
                </Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Text color="white" style={styles.underLineText}>
                  Send Reminders
                </Text>
              </TouchableWithoutFeedback>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };
  const scheduleList = () => {
    return (
      <Block>
        {scheduleItem()}
        {scheduleItem()}
      </Block>
    );
  };
  const doctorDash = () => {
    return (
      <Block style={styles.container}>
        <Block
          flex
          style={{
            marginVertical: theme.SIZES.BASE,
            paddingBottom: theme.SIZES.BASE,
          }}
        >
          <Text color={"#0033A7"} size={26} bold>
            Hello Doctor
          </Text>
        </Block>
        {cardBox()}
        <Block
          flex
          flexDirection="row"
          style={{ marginVertical: theme.SIZES.BASE * 2.5 }}
        >
          <Text color={"#0033A7"} bold>
            Today's Schedule
          </Text>
          <TouchableWithoutFeedback>
            <Icon
              name="ellipsis-v"
              family="font-awesome"
              color={theme.COLORS.MUTED}
              size={14}
              style={[styles.icons1]}
            >
              {" "}
            </Icon>
          </TouchableWithoutFeedback>
        </Block>
        {scheduleList()}
      </Block>
    );
  };

  return (
    <Block flex>
      <ScrollView
        style={styles.components}
        showsVerticalScrollIndicator={false}
      >
        {doctorDash()}
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  insideSchduleItem: {
    borderRadius: 12,
    backgroundColor: "#6695FF",
    padding: theme.SIZES.BASE,
  },
  scheduleItem: {
    marginVertical: theme.SIZES.BASE * 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 10,
  },
  flexCardItem: {
    backgroundColor: "white",
    borderRadius: 12,
    width: theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 7,
    marginTop: -theme.SIZES.BASE * 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 10,
  },
  pText: {
    padding: theme.SIZES.BASE,
    paddingVertical: 2,
  },
  underLineText: {
    margin: theme.SIZES.BASE,
    textDecorationLine: "underline",
  },
  mutedText: {
    padding: theme.SIZES.BASE / 2,
    paddingLeft: theme.SIZES.BASE / 2,
  },
  headerText: {
    color: "white",
    padding: theme.SIZES.BASE,
    paddingLeft: theme.SIZES.BASE / 2,
  },
  container: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 1,
  },
  listBox: {
    borderRadius: 12,
    backgroundColor: "#0033A7",
    padding: theme.SIZES.BASE,
  },
  icons: {
    paddingHorizontal: theme.SIZES.BASE / 2,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  icons1: {
    position: "absolute",
    right: 0,
    paddingHorizontal: theme.SIZES.BASE / 2,
    color: "#3B3E51",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});

export default Components;
