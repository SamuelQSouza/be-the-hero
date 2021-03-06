import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 15,
    color: '#737380'
  },
  headerTextBold: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: 30,
    marginBottom: 8,
    color: '#13131a',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    marginBottom: 48,
    lineHeight: 24,
    color: '#737380'
  },
  incidentList: {
    marginTop: 24
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    elevation: 1
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: '700'
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 12,
    color: '#737380'
  },
  detailButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: '700'
  }
});
