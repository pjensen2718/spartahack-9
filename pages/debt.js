import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { Card, GraphCard, CardFooter } from "../components/card.js";
import { GlobalColor, GlobalText } from '../components/global_styles.js';
import { LineChart } from 'react-native-chart-kit';

export default function Debt() {
  const [data, setData] = useState([[], []]); // Initialize state

  useEffect(() => {
    // Replace '1' with the actual user ID you want to fetch transactions for
    fetch('http://35.21.188.178:3000/transactions/1')
      .then(response => {
        if (!response.ok) {
          console.error('HTTP error! status:', response.status, 'statusText:', response.statusText);
        }
        return response.json();
      })
      .then(transactions => {
        console.log('Transactions:', transactions);
        let processedData = processData(transactions);
        console.log('Processed data:', processedData);
        setData(processedData);
      })
      .catch(error => console.error('Failed to fetch transactions:', error));
  }, []); // Empty array means this effect runs once on mount

  return (
    <ScrollView>
      <GraphCard>
        {data}
      </GraphCard>

      <Card>
        <Text style = {GlobalText.headerText}>National Debt</Text>
      </Card> 
    </ScrollView>
  );
}

function processData(transactions) {
  const totalsByDay = transactions.reduce((totals, transaction) => {
    if (!totals[transaction.day]) {
      totals[transaction.day] = 0;
    }
    totals[transaction.day] += transaction.Amount;
    return totals;
  }, {});

  const days = [];
  const amounts = [];
  let lastTotal = 0;
  for (let day = 1; day <= 31; day++) {
    if (totalsByDay[day]) {
      lastTotal = totalsByDay[day];
    }
    days.push(day);
    amounts.push(lastTotal);
  }

  return [days, amounts];
}