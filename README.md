# react-native-animated-blur-view

React Native Animated Blur component

https://www.npmjs.com/package/react-native-animated-blur-view

## Installation

```sh
npm install react-native-animated-blur-view
```

## Usage

```js
import AnimatedBlurView, { AnimatedBlurViewMethods } from "react-native-animated-blur-view";
export default function App() {
  const blurViewRef = useRef<AnimatedBlurViewMethods>();

  useEffect(() => {
    blurViewRef.current?.start(true);
  }, []);

  return (
    <View style={styles.container}>
      <Text>React Native Animated Blur View</Text>
      <AnimatedBlurView
        ref={blurViewRef}
        style={StyleSheet.absoluteFillObject}
        blurStart={10}
        blurEnd={20}
        animationDuration={2}
      />
    </View>
  );
}
```

**Props:**

- **`blurStart`**: number (required). Blur effect start amount.
- **`blurEnd`**: number (required). Blur effect end amount.
- **`animationDuration`**: number (required). Animation duration in seconds.
- **`gradient`**: boolean (optional). Add gradient effect. Default is false.
- **`style`**: StyleProp (optional). View style of the component.
- **`animationType`**: string (optional). Blur Animation type. One of `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(n,n,n,n)`. Default is `ease`.
- **`extraStyles`**: string (optional). Add extra css styles to blur component.

## Imperative API
## `start(show: boolean, cb: () => void)`

```js
ref.current?.start(true, () => console.log('Finished'));
```

Animates blur view from blurStart amount to blurEnd amount in given animation duration.

## `reset(show: boolean)` lower level imperative API

```js
ref.current?.reset(true);
```

Will stop animation and set blurStart/blurEnd amount.

##

 <img width="360" alt="devmenu" src="https://github.com/gevgasparyan/react-native-animated-blur-view/assets/13519034/4f60f146-7c06-4cad-b049-6e55be72609d">


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

