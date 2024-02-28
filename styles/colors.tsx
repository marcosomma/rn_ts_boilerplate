import { shadeColor } from "../utils"; 
import { Colors } from "../_types";

/**
 * Represents a collection of colors used in the application.
 */
const colors:Colors = {
  primary: shadeColor('#e4d9fd', -50),
  primary0: shadeColor('#e4d9fd', 0),
  primary50: shadeColor('#e4d9fd', -5),
  primary100: shadeColor('#e4d9fd', -10),
  primary200: shadeColor('#e4d9fd', -20),
  primary300: shadeColor('#e4d9fd', -30),
  primary400: shadeColor('#e4d9fd', -40),
  primary600: shadeColor('#e4d9fd', -60),
  primary700: shadeColor('#e4d9fd', -70),
  primary800: shadeColor('#e4d9fd', -80),
  primary900: shadeColor('#e4d9fd', -90),
  secondary: shadeColor('#D4FF00', 0),
  secondary0: shadeColor('#D4FF00', 50),
  secondary50: shadeColor('#D4FF00', -5),
  secondary100: shadeColor('#D4FF00', -10),
  secondary200: shadeColor('#D4FF00', -20),
  secondary300: shadeColor('#D4FF00', -30),
  secondary400: shadeColor('#D4FF00', -40),
  secondary600: shadeColor('#D4FF00', -60),
  secondary700: shadeColor('#D4FF00', -70),
  secondary800: shadeColor('#D4FF00', -80),
  secondary900: shadeColor('#D4FF00', -90),
  accent: '#f7bc0c',
  error: '#9b095c',
  gray: shadeColor('#F4F4F4', -0),
  gray400: shadeColor('#F4F4F4', -40),
  gray800: shadeColor('#F4F4F4', -80),
}

  export default colors;