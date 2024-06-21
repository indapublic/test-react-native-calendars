import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import {CalendarList } from "react-native-calendars"

export default function App() {
  const calendarRef = useRef(null)
  const calendarWidth = 300

  return (
    <View style={styles.container}>
      <CalendarList
        current="2024-09-18"
        ref={calendarRef}
        scrollEnabled={false}
        hideArrows={false}
        hideExtraDays={true}
        disableMonthChange={false}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
        disableAllTouchEventsForDisabledDays={true}
        horizontal={true}
        pagingEnabled={true}
        style={{
          width: calendarWidth,
          overflow: "hidden",
        }}
        calendarWidth={calendarWidth}
        theme={{
          // Для стилизации https://github.com/wix/react-native-calendars#individual-day-header-styling
          textDayFontFamily: "MontserratRegular",
          textMonthFontFamily: "MontserratSemiBold",
          textDayHeaderFontFamily: "MontserratRegular",
          textDayFontSize: 12,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
          selectedDayTextColor: "#FFFFFF",
          // selectedDayBackgroundColor: theme.palette.secondary.main,
          indicatorColor: "red",
          stylesheet: {
            day: {
              basic: {
                width: 25,
                height: 25,
                borderRadius: 8,
              },
            },
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
