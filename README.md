# react-native-animated-weather-icons
Animated SVG Weather Icons for React Native

## Requirements
* [react-native-svg](https://github.com/react-native-svg/react-native-svg)

## Installation
````
yarn add react-native-animated-weather-icons-fork
````
or
````
npm i react-native-animated-weather-icons-fork
````

## Usage
````
import AnimatedWeatherIcon from 'react-native-animated-weather-icons-fork';
````

# Props
|    Property  | Type          | Default         | Description |
| -------------| ------------- | --------------- | ------------- |
| weatherName  | string        | 'weather-sunny' | Specifies icon to show|

# Example
````javascript
const App: () => Node = () => {
  return (
    <View>
      <AnimatedWeatherIcon 
        weatherName="weather-sunny"
      />
    </View>
  )
}
````

## Credit
### Forked from [react-native-animated-weather-icons](https://github.com/stan-sack/react-native-animated-weather-icons) by stan-sack
### Forked from [https://github.com/CurtisTD/react-native-animated-weather-icons](https://github.com/CurtisTD/react-native-animated-weather-icons) by CurtisTD

### Changes since forking:
* Created a single component to use rather than having to import each different component in. Now the name can be passed into said singular component.
* Fixed an issue with snow icon not working due to path errors.
* Some other react-native issues that were causing errors.

### Possible future changes:
* Specifying styles and colors
* Allowing options for animation looping, pausing, etc.
