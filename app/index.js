// app/index.js

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import DefectsScreen from '../screens/DefectsScreen';

export default function HomeScreen() {
  return (
    <>
      <DefectsScreen />
      <StatusBar style="light" />
    </>
  );
}