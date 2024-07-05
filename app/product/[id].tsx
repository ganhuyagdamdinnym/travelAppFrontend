import { View,Text,Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
const detailProduct=()=>{
    const { id } = useLocalSearchParams();
    
    return(
        <View>
            <Text>
                hi
            </Text>
        </View>
    )
}

export default detailProduct;