import React, { useState } from "react";
import { StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from "react-native";
import { Block, Text, theme } from "galio-framework";

import materialTheme from '../constants/Theme';
import { Icon } from '../components'

const { width, height } = Dimensions.get('screen');

const Notification = (props) => {  

  const renderCases = (cases) => {
    
    let { heading, subHeading1, subHeading2, subHeading3, date } = cases;
    
    return (
      <Block style={styles.schedule}>        
        <Block row>            
          <Block middle style={styles.padTop10}>              
            <Text bold size={18} style={styles.caseTitle}>{heading}</Text>
            <Block style={styles.blockText}>
              <Text style={styles.marBtm5}>{subHeading1}</Text>
              <Text style={styles.marBtm5}>{subHeading2}</Text>
              <Text style={styles.marBtm5}>{subHeading3}</Text>
              <Block row style={styles.padVrt1}>
              <Block middle>
                <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16}> </Icon>  
              </Block>
              <Block middle style={styles.marRight40}>
                <Text>{date}</Text>                  
              </Block>   
            </Block>
            </Block>
          </Block>
        </Block>
      </Block> 
    );
  }

  return (
    <Block flex style={styles.notification}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"          
        showsHorizontalScrollIndicator={false}
        snapToInterval={(theme.SIZES.BASE * 0.375)}
        contentContainerStyle={{ paddingHorizontal: theme.SIZES.BASE / 2 }}
        style={{marginTop: 4, zIndex: 4}}
      >
            
        <TouchableOpacity           
          style={styles.dateActive}
        >              
          <Text size={16} color={'white'} style={{paddingLeft: 10}} >Incoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dateInActive}
        >
          <Text size={16} style={{paddingLeft: 20}}>Missing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dateInActive}
        >
          <Text size={16} style={{paddingLeft: 10}}>Reschedule</Text>
        </TouchableOpacity>
      </ScrollView>             
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        {renderCases({
          heading: 'Get 50% off on complete medical checkup',
          subHeading1: 'MBBS,DOMS,MS - Ophthalmology',
          subHeading2: 'Ophthalmologist',
          subHeading3: '26 years of experience',
          date: '02/16/2021'
        })}
        {renderCases({
          heading: 'Get 50% off on complete medical checkup',
          subHeading1: 'MBBS,DOMS,MS - Ophthalmology',
          subHeading2: 'Ophthalmologist',
          subHeading3: '26 years of experience',
          date: '02/16/2021'
        })}
        {renderCases({
          heading: 'Get 50% off on complete medical checkup',
          subHeading1: 'MBBS,DOMS,MS - Ophthalmology',
          subHeading2: 'Ophthalmologist',
          subHeading3: '26 years of experience',
          date: '02/16/2021'
        })}
        {renderCases({
          heading: 'Get 50% off on complete medical checkup',
          subHeading1: 'MBBS,DOMS,MS - Ophthalmology',
          subHeading2: 'Ophthalmologist',
          subHeading3: '26 years of experience',
          date: '02/16/2021'
        })}    
      </ScrollView>      
    </Block>
  );
}

const styles = StyleSheet.create({
  notification: {
    paddingVertical: theme.SIZES.BASE / 3,
  },  
  caseTitle: {
    alignSelf: 'flex-start',
    paddingVertical: 5
  },
  schedule: {
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.02,
    marginHorizontal: width * 0.04,    
    borderRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 3,
    zIndex: 2,
  },
  title: {
    paddingTop: theme.SIZES.BASE / 2,
    paddingBottom: theme.SIZES.BASE * 1.5,
  },
  blockText: {
    borderWidth: 1, 
    borderRadius: 5, 
    borderColor: theme.COLORS.GREY, 
    padding: 8, 
    marginBottom:12, 
    width: width * 0.82
  },
  padTop10: {
    paddingTop: 10
  },
  marBtm5: {
    marginBottom: 5
  },
  padVrt1: {
    paddingVertical: 1
  },
  marRight40: {
    marginRight: 40
  },
  dateActive: {
    backgroundColor: '#00CE30', 
    borderRadius: 18, 
    paddingHorizontal: 8, 
    paddingVertical: 5, 
    marginRight: 4,
    width: width * 0.3,
    height: 34,
    marginBottom: 4
  },
  dateInActive: {
    borderWidth: 1,
    borderColor: 'white', 
    borderRadius: 18,  
    paddingHorizontal: 4,
    paddingVertical: 5, 
    marginRight: 4,     
    width: width * 0.3,       
    height: 34,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 3,
  },
});

export default Notification;