# react-native-animated-blur-view

Animated blur effect of the view

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

- **`blurStart`**: number. Blur effect start amount.
- **`blurEnd`**: number. Blur effect end amount.
- **`animationDuration`**: number. Animation duration in seconds.
- **`style`**: optional. View style of the component.

## `start(show: boolean, cb: () => void)` lower level imperative API

```js
ref.current?.start(true, () => console.log('Finished'));
```

Animates blur view from blurStart amount to blurEnd amount in given animation duration.

## `reset(show: boolean)` lower level imperative API

```js
ref.current?.reset(true);
```

Will stop animation and set blurStart/blurEnd amount.


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

