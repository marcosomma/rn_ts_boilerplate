import type { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Represents a set of colors used in the application.
 */
export type Colors ={
  primary: string;
  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary0: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
  secondary: string;
  secondary50: string;
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  secondary0: string;
  secondary600: string;
  secondary700: string;
  secondary800: string;
  secondary900: string;
  accent: string;
  error: string;
  gray: string;
  gray400: string;
  gray800: string;
}

  export type StringFunction = {
    (input: String): void;
  };
  
  export type NumberFunction = {
    (input: number): void;
  };
  
  export type HandlerEvents = {
    (event: String): void;
  };
  
  export interface ListObjects extends Array<CustomObject> {}
  
  export interface CustomObject {
    id: number;
    value: String;
  }
  
export interface AppCustomProps extends NativeStackScreenProps<any,any> { 
    stringFunction?: StringFunction;
    numberFunction?: NumberFunction;
    handlerEvents?: HandlerEvents;
    listObjects?: ListObjects;
}
  