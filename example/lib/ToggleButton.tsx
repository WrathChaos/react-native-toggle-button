import * as React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./ToggleButton.style";
import useStateWithCallback from "./helpers/useStateWithCallback";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IToggleButtonProps {
  style?: CustomStyleProp;
  backgroundColor?: string;
  onPress: (isToggled: boolean) => void;
}

const ToggleButton: React.FC<IToggleButtonProps> = ({ style, onPress }) => {
  const [isToggled, setToggled] = useStateWithCallback<boolean>(false);

  const handlePress = () => {
    setToggled(!isToggled, (newValue: boolean) => {
      onPress && onPress(newValue);
    });
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback style={{}} onPress={handlePress}>
        <View style={styles.containerGlue}>
          <View
            style={
              isToggled ? styles.activeButtonStyle : styles.inactiveButtonStyle
            }
          >
            <Text
              style={
                isToggled ? styles.activeTextStyle : styles.inactiveTextStyle
              }
            >
              On
            </Text>
          </View>
          <View
            style={
              !isToggled ? styles.activeButtonStyle : styles.inactiveButtonStyle
            }
          >
            <Text
              style={
                !isToggled ? styles.activeTextStyle : styles.inactiveTextStyle
              }
            >
              Off
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ToggleButton;
