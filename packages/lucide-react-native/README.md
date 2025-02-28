# Lucide React Native

Implementation of the lucide icon library for React Native applications.

> What is lucide? Read it [here](https://github.com/lucide-icons/lucide#what-is-lucide).

## Installation

First, ensure that you have `react-native-svg@^12.0.0` installed. Then, install the package:

```sh
yarn add lucide-react-native

# or

npm install lucide-react-native
```

## How to use

It's built with ES modules so it's completely threeshakable.
Each icon can be imported as a react component.

### Example

You can pass additional props to adjust the icon.

``` js
import { Camera } from 'lucide-react-native';

const App = () => {
  return <Camera color="red" size={48}/>
};

export default App;
```

### Props

|  name        |   type   |  default
| ------------ | -------- | --------
| `size`       | *Number* | 24
| `color`      | *String* | currentColor
| `strokeWidth`| *Number* | 2

### Custom props

You can also pass custom props that will be added in the svg as attributes.

``` js
const App = () => {
  return <Camera fill="red"/>
};
```

### Generic icon component

It is possible to create a generic icon component to load icons.

> :warning: The example below is importing all ES modules. This is **not** recommended when you using a bundler since your application build size will grow substantially.

``` js
import * as icons from 'lucide-react-native';

const Icon = ({name, color, size}) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />
};

export default Icon;
```
