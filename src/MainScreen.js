import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { List } from "react-native-paper";
import format from "date-fns/format";

const memos = [
  {
    text: "メモメモメモメモメモ",
    createdAt: 1585574700000,
  },
  {
    text: "メモメモメモメモメモ",
    createdAt: 1585534700000,
  },
  {
    text: "メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ",
    createdAt: 1582574700000,
  },
  {
    text: "メモメモメモメモメモ",
    createdAt: 1586574700000,
  },

];

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memos}
        keyExtractor={item => `${item.createdAt}`}
        renderItem={({item})=>(
          <List.Item
            title={item.text}
            titleNumberOfLines={5}
            description={
              `作成日時: ${format(item.createdAt, 'yyyy.MM.dd HH:mm')}`
            }
            descriptionStyle={{ textAlign: 'right' }}
          />
        )}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
      flex: 1,
    },
});