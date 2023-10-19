import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

export type Props = {
  blurStart: number;
  blurEnd: number;
  animationDuration: number;
  style?: StyleProp<ViewStyle>;
  gradient?: boolean;
};

export interface AnimatedBlurViewMethods {
  start: (show: boolean, cb?: () => void) => void;
  reset: (show: boolean) => void;
}

const STYLE = `
      position: absolute;
      bottom: 0px;
      left: 0px;
      top: 0px;
      right: 0px;
      background-color: rgba(0, 0, 0, 0);
    `;

const GRADIENT_STYLE = `
      position: absolute;
      bottom: 0px;
      left: 0px;
      top: 0px;
      right: 0px;
      background-color: rgba(0, 0, 0, 0);
      -webkit-mask: linear-gradient(#000, #000, transparent);
      mask: linear-gradient(#000, #000, transparent);
    `;

const AnimatedBlurView: ForwardRefRenderFunction<
  AnimatedBlurViewMethods,
  Props
> = ({ style, blurStart, blurEnd, gradient, animationDuration }, ref) => {
  const [extraStyles, setExtraStyles] = useState(`
        -webkit-backdrop-filter: blur(${blurStart}px);
        backdrop-filter: blur(${blurStart}px);
      `);
  const blurStates = useMemo(() => {
    return {
      visibleAnimate: `
            -webkit-backdrop-filter: blur(${blurEnd}px);
            backdrop-filter: blur(${blurEnd}px);
            animation: backdrop-filter-animation ${animationDuration}s ease;
          `,
      hiddenAnimate: `
            -webkit-backdrop-filter: blur(${blurStart}px);
            backdrop-filter: blur(${blurStart}px);
            animation: backdrop-filter-animation ${animationDuration}s ease;
            animation-direction: reverse;
          `,
      visible: `
            -webkit-backdrop-filter: blur(${blurEnd}px);
            backdrop-filter: blur(${blurEnd}px);
          `,
      hidden: `
            -webkit-backdrop-filter: blur(${blurStart}px);
            backdrop-filter: blur(${blurStart}px);
          `,
    };
  }, [blurStart, blurEnd, animationDuration]);

  useImperativeHandle(
    ref,
    () => {
      return {
        start: (show: boolean, cb?: () => void) => {
          setExtraStyles(
            show ? blurStates.visibleAnimate : blurStates.hiddenAnimate
          );
          setTimeout(() => {
            cb && cb();
          }, animationDuration * 1000);
        },
        reset: (show: boolean) => {
          setExtraStyles(
            show ? blurStates.visibleAnimate : blurStates.hiddenAnimate
          );
        },
      };
    },
    [blurStates, animationDuration]
  );

  return (
    <View style={style} pointerEvents="none">
      <WebView
        source={{
          html: `
                  <style>
                    div {
                      ${gradient ? GRADIENT_STYLE : STYLE}
                      ${extraStyles};
                    }
                    @keyframes backdrop-filter-animation {
                      from {
                         backdrop-filter: blur(${blurStart}px);
                         -webkit-backdrop-filter: blur(${blurStart}px);
                      }
                      to {
                         backdrop-filter: blur(${blurEnd}px);
                         -webkit-backdrop-filter: blur(${blurEnd}px);
                      }
                    }
                  </style>
                  <div />
                `,
        }}
        style={styles.webView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webView: {
    backgroundColor: "transparent",
  },
});

export default forwardRef<AnimatedBlurViewMethods, Props>(AnimatedBlurView);
