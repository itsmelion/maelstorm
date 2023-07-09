import { ScrollView, ScrollViewProps } from 'react-native'

export const ForecastList = (props: ScrollViewProps) => (
  <ScrollView
    contentContainerStyle={{
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      minWidth: '100%',
    }}
    horizontal
    style={{
      flexGrow: 0,
      flexBasis: 'auto',
      flexShrink: 1,
    }}
    {...props}
  />
);
