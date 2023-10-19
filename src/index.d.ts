export declare function multiply(a: number, b: number): Promise<number>;
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export type Props = {
  blurStart: number;
  blurEnd: number;
  animationDuration: number;
  gradient?: boolean;
  style?: StyleProp<ViewStyle>;
};
export interface AnimatedBlurViewMethods {
  start: (show: boolean, cb?: () => void) => void;
  reset: (show: boolean) => void;
}
declare const _default: React.ForwardRefExoticComponent<
  Props & React.RefAttributes<AnimatedBlurViewMethods>
>;
export default _default;
//# sourceMappingURL=index.d.ts.map
