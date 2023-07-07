import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  List: undefined;
  Forecast: { id: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    type RootParamList = RootStackParamList
  }
}
