import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './navigation.js';

export default function App() {
  return (
    <NavBar />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});