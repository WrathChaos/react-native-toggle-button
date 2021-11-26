import * as React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableWithoutFeedback,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./ToggleButton.style";
import useStateWithCallback from "./helpers/useStateWithCallback";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IToggleButtonProps {
  style?: CustomStyleProp;
  activeButtonStyle?: CustomStyleProp;
  activeTextStyle?: CustomTextStyleProp;
  inactiveButtonStyle?: CustomStyleProp;
  inactiveTextStyle?: CustomTextStyleProp;
  TouchableComponent?: any;
  primaryText: string;
  secondaryText: string;
  initial?: boolean;
  onPress: (isToggled: boolean) => void;
}

const ToggleButton: React.FC<IToggleButtonProps> = ({
  style,
  activeButtonStyle,
  activeTextStyle,
  inactiveButtonStyle,
  inactiveTextStyle,
  primaryText,
  secondaryText,
  initial = true,
  TouchableComponent = TouchableWithoutFeedback,
  onPress,
}) => {
  const [isToggled, setToggled] = useStateWithCallback<boolean>(initial);

  const handlePress = () => {
    setToggled(!isToggled, (newValue: boolean) => {
      onPress && onPress(newValue);
    });
  };

  const onToggleButtonStyle = isToggled
    ? [styles.activeButtonStyle, activeButtonStyle]
    : [styles.inactiveButtonStyle, inactiveButtonStyle];
  const onToggleTextStyle = isToggled
    ? [styles.activeTextStyle, activeTextStyle]
    : [styles.inactiveTextStyle, inactiveTextStyle];

  const offToggleButtonStyle = !isToggled
    ? [styles.activeButtonStyle, activeButtonStyle]
    : [styles.inactiveButtonStyle, inactiveButtonStyle];
  const offToggleTextStyle = !isToggled
    ? [styles.activeTextStyle, activeTextStyle]
    : [styles.inactiveTextStyle, inactiveTextStyle];

  return (
    <View style={[styles.container, style]}>
      <TouchableComponent style={{}} onPress={handlePress}>
        <View style={styles.containerGlue}>
          <View style={onToggleButtonStyle}>
            <Text style={onToggleTextStyle}>{primaryText}</Text>
          </View>
          <View style={offToggleButtonStyle}>
            <Text style={offToggleTextStyle}>{secondaryText}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default ToggleButton;
