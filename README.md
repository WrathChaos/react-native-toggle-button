<img alt="React Native Toggle Button" src="assets/logo.png" width="1050"/>

[![React Native Toggle Button](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-toggle-button)

[![npm version](https://img.shields.io/npm/v/react-native-toggle-button.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-toggle-button)
[![npm](https://img.shields.io/npm/dt/react-native-toggle-button.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-toggle-button)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Toggle Button"
        src="assets/Screenshots/typescript.jpg" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-toggle-button
```

## Peer Dependencies

Zero Dependency

# Usage

## Import

```jsx
import ToggleButton from "react-native-toggle-button";
```

## Fundamental Usage

```jsx
<ToggleButton
  primaryText="On"
  secondaryText="Off"
  onPress={(isToggled: boolean) => {
    console.log(isToggled);
  }}
/>
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property      |   Type   |  Default  | Description                                                        |
| ------------- | :------: | :-------: | ------------------------------------------------------------------ |
| primaryText   |  string  | undefined | change the primaryText                                             |
| secondaryText |  string  | undefined | change the secondaryText                                           |
| onPress       | function | undefined | set your own logic for the button functionality when it is pressed |

## Customization (Optionals)

| Property            |           Type           | Default | Description                                                                               |
| ------------------- | :----------------------: | :-----: | ----------------------------------------------------------------------------------------- |
| inial               |         boolean          |  true   | let you change the initial toggled value                                                  |
| style               |        ViewStyle         | default | set or override the style object for the main container                                   |
| activeButtonStyle   |        ViewStyle         | default | set or override the style object for the `active button` style                            |
| inactiveButtonStyle |        ViewStyle         | default | set or override the style object for the `inactive button` style                          |
| activeTextStyle     |        TextStyle         | default | set or override the style object for the `active text` style                              |
| inactiveTextStyle   |        TextStyle         | default | set or override the style object for the `inactive text` style                            |
| TouchableComponent  | TouchableWithoutFeedback | default | set your own component instead of default react-native TouchableWithoutFeedback component |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Toggle Button is available under the MIT license. See the LICENSE file for more info.
