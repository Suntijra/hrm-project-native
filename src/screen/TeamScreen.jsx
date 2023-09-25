import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    RefreshControl,
    TextInput,
    Image,
} from "react-native"
import { useState } from "react";

function TeamScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        console.log("onRefresh");
        setRefreshing(true)
        setRefreshing(false);
    };
    return (
        <ImageBackground source={require("../assets/imgs/Background.png")}>
            <View className='font-sans' style={{ height: "100%", width: "100%" }}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor="#007AFF" // Color of the refresh indicator
                            title="Pull to refresh"
                            titleColor="#007AFF" // Color of the title text
                        />
                    }
                    style={{ padding: 16 }}
                >
                    <View className="relative w-full flex justify-center items-center bg-[#FAFAFC] rounded-[100px]">
                        <Image className="w-6 h-6 absolute left-5" source={require("../assets/icon/search.png")} />
                        <TextInput className="w-full px-14 h-14" placeholder="Search" />
                    </View>
                    <ScrollView className="mt-3" >
                        {/* lable Own Team */}
                        <Text className="font-bold text-xl py-3 text-[#2D3643]">Own Team</Text>
                        <View className="rounded-lg bg-light-light-4 bg-white p-3 h-[90] flex flex-row "
                            style={{
                                elevation: 3, // You can adjust the elevation value according to your preference
                                shadowColor: 'rgba(0, 0, 0, 0.10)',
                                shadowOffset: { width: 0, height: 5 },
                                shadowRadius: 20,
                                shadowOpacity: 1,
                            }}>
                            <View className='h-full bg-[#E6EDFF] w-[80px] rounded-[8px] flex justify-center items-center'>
                                <Image
                                    className='w-[70] h-[70] p-6 rounded-full border-l-rose-500'
                                    source={{
                                        uri: 'https://i.pinimg.com/564x/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.jpg'
                                    }}
                                />
                            </View>
                            <View className=" mx-2 w-full max-w-[260px] flex justify-around">
                                <View className="flex justify-center justify-items-center content-center">
                                    <Text className="text-[#555770] text-xl font-[500]">
                                        Piyathida Kirdrpom(Fhay)

                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        UXUI Designer
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
export default TeamScreen