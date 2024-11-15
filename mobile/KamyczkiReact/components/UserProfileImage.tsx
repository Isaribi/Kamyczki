import React from 'react';
import { View, Image, StyleSheet} from "react-native";

interface UserProfileImage
{
    profileImage:object,
    imageDimensions:number
}
const UserProfileImage = (props : UserProfileImage) =>
{
    return (
        <View style={[styles.userImageContainer,{borderRadius:props.imageDimensions}]}>
            <Image  style={{
                width:props.imageDimensions,
                height:props.imageDimensions, 
                borderRadius:props.imageDimensions}} 
                source={props.profileImage}/>
        </View>
    );
};
const styles = StyleSheet.create({
    userImageContainer:
    {
        borderColor:'gray',
        borderWidth:1,
        padding:0,
        alignItems:'center',
    },
});

export default UserProfileImage;