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
  backgroundColor?: string;
  TouchableComponent?: any;
  onPress: (isToggled: boolean) => void;
}

const ToggleButton: React.FC<IToggleButtonProps> = ({
  style,
  activeButtonStyle,
  activeTextStyle,
  inactiveButtonStyle,
  inactiveTextStyle,
  TouchableComponent = TouchableWithoutFeedback,
  onPress,
}) => {
  const [isToggled, setToggled] = useStateWithCallback<boolean>(false);

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
            <Text style={onToggleTextStyle}>On</Text>
          </View>
          <View style={offToggleButtonStyle}>
            <Text style={offToggleTextStyle}>Off</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default ToggleButton;
