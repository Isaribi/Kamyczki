import React, { useEffect, useState } from 'react';
import { Image, Text, View, Dimensions, StyleSheet } from 'react-native';
import UserProfileImage from './UserProfileImage';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export interface UserPostDTO {
  id: string;
  ownerId: string | null;
  name: string;
  description: 'null';
  zipCode: 'string';
}

const UserPost = (props: UserPostDTO) => {
  const [imageHeight, setImageHeight] = useState<number>();
  const logo = Image.resolveAssetSource(require('../assets/images/logo.jpg'));
  const source = Image.resolveAssetSource(require('../assets/images/kamyk2.png'));

  useEffect(() => {
    const windowWidth = Dimensions.get('screen').width;
    setImageHeight(Math.round((source.height * windowWidth) / source.width));
  }, [source]);

  return (
    <View style={UserPostStyles.postContainer}>
      <View style={UserPostStyles.header}>
        <View style={UserPostStyles.userContainer}>
          <UserProfileImage imageDimensions={48} profileImage={logo} />
          <View style={UserPostStyles.userInfoContainer}>
            <Text numberOfLines={1} style={UserPostStyles.userName}>
              {props.name}
            </Text>
            {props.zipCode && (
              <Text numberOfLines={1} style={UserPostStyles.location}>
                {props.zipCode}
              </Text>
            )}
          </View>
        </View>
        <Ionicons name="ellipsis-horizontal" size={20} />
      </View>
      <View style={[UserPostStyles.imageContainer, { height: imageHeight }]}>
        <Image style={UserPostStyles.image} source={source} />
      </View>
      <View style={UserPostStyles.description}>
        <Text>{props.description}</Text>
      </View>
      <View style={UserPostStyles.userPostStats}>
        <View style={UserPostStyles.userPostStatsButton}>
          {/* <FontAwesomeIcon icon={faHeart}/> */}
          <Ionicons name="heart" />
          <Text style={UserPostStyles.userPostStatsText}>1</Text>
        </View>

        <View style={UserPostStyles.userPostStatsButton}>
          <FontAwesome6 name="message" color="black" />
          <Text style={UserPostStyles.userPostStatsText}>2</Text>
        </View>

        <View style={UserPostStyles.userPostStatsButton}>
          {/* <FontAwesomeIcon icon={faBookmark}/> */}
          <Ionicons name="bookmark" />
          <Text style={UserPostStyles.userPostStatsText}>3</Text>
        </View>
      </View>
    </View>
  );
};
export default UserPost;
const UserPostStyles = StyleSheet.create({
  postContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: 'lightgray',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  userContainer: {
    flexDirection: 'row',
  },
  userInfoContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  userName: {
    color: '#000',
    // fontFamily:getFontFamily('Inter_24pt', 'bold'),
    fontSize: 16,
  },
  location: {
    color: 'gray',
    // fontFamily:getFontFamily('Inter_24pt', 'normal'),
    fontSize: 12,
    marginTop: 1,
  },
  imageContainer: {
    width: '100%',
    marginVertical: 15,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    // justifyContent:'center',
    // alignItems:'center',
    // marginTop:20,
  },
  userPostStats: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
  },
  userPostStatsButton: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  userPostStatsText: {
    marginLeft: 3,
  },
  description: {
    marginHorizontal: 5,
    marginVertical: 5,
    fontSize: 20,
    textAlign: 'left',
  },
});
