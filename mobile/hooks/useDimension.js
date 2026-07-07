import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');
const useDimensions = () => ({
    width: width,
    height: height
})
export default useDimensions;