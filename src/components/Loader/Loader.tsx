import React, { useEffect, useRef, useState } from "react";
import { View, TextInput } from "react-native";
import Animated, {
  Easing,
  interpolateNode,
  multiply,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, G } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export function Loader({ duration = 20 * 100000, toValue = 100 }: any) {
  const moveCircle = useRef(new Animated.Value(0)).current;
  const textRef: any = useRef();
  const [width, setWidth] = useState(0);
  const size = width - 350;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const cercumference = radius * 2 * Math.PI;

  const alpha = interpolateNode(moveCircle, {
    inputRange: [0, 1],
    outputRange: [0, cercumference],
  });
  const strokeDashoffset = multiply(alpha, radius);

  useEffect(() => {
    Animated.timing(moveCircle, {
      toValue,
      duration,
      easing: Easing.linear,
    }).start();

    if (textRef?.current) {
      // const maxPer = (100 * percentage) / toValue;
      textRef.current.setNativeProps({
        text: `${"Loading..."}`,
      });
    }
  }, [moveCircle]);

  return (
    <SafeAreaView>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          flex: 1,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Svg width={size} height={size}>
          <G>
            <Circle
              stroke="#FFD900"
              fill="#FFD000"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={cercumference}
            />

            <AnimatedTextInput
              ref={textRef}
              editable={false}
              defaultValue="0"
              style={{
                fontSize: radius / 4,
                fontWeight: "600",
                textAlign: "center",
                paddingTop: radius,
              }}
            />

            <AnimatedCircle
              stroke="#FFA500"
              fill={0}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeDasharray={cercumference}
              {...{ strokeWidth, strokeDashoffset }}
            />
          </G>
        </Svg>
      </View>
    </SafeAreaView>
  );
}
