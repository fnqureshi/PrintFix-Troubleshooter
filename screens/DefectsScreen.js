// screens/DefectsScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import defectsData from '../data/defects_seed.json';

const DefectsScreen = () => {
  const [selectedProcess, setSelectedProcess] = useState(defectsData[0]);

  const renderDefects = () => {
    return selectedProcess.defects.map((defect, index) => (
      <View key={index} style={styles.defectItem}>
        <Text style={styles.defectText}>• {defect}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Defect Troubleshooter</Text>
      
      <View style={styles.processSelector}>
        {defectsData.map((process) => (
          <TouchableOpacity
            key={process.process_name}
            style={[
              styles.processButton,
              selectedProcess.process_name === process.process_name && styles.selectedButton,
            ]}
            onPress={() => setSelectedProcess(process)}
          >
            <Text style={styles.buttonText}>{process.process_name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.defectsList}>
        <Text style={styles.subHeader}>Common Defects for {selectedProcess.process_name}:</Text>
        {renderDefects()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  processSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  processButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#333333',
  },
  selectedButton: {
    backgroundColor: '#4A90E2',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  defectsList: {
    flex: 1,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#E0E0E0',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 10,
  },
  defectItem: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  defectText: {
    fontSize: 16,
    color: '#CCCCCC',
  },
});

export default DefectsScreen;