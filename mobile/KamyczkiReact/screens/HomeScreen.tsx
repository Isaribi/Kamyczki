import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, View, StatusBar} from 'react-native';
import { StyleSheet } from "react-native";
import Header from '../components/Header';
import UserPost from '../components/UserPost';
import { UserPostDTO } from '../components/UserPost';
import { globalStyle } from '../assets/styles/globalStyles';
import { useQuery } from '@tanstack/react-query';
import { getAllStones } from '../utils/stones-api';

const Home = ({navigation}:any) => {

    const {
      data:stones,
      error,
      isLoading,
    } = useQuery({queryKey:['stones'],queryFn:getAllStones});
  // useEffect(() => {
  //   setIsLoading(true);
  //   const getInitialData = pagination(userPosts,postsFetchCounter,userPostsPageSize);
  //   setPostsRenderedItems(getInitialData);
  //   setPostsFetchCounter(1);
  //   setIsLoading(false);
  // },[]);

  return (
      <SafeAreaView style={globalStyle.backgroundWhite}>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
        <View style={style.userPostsContainer}>
          <FlatList data={stones}
                    ListHeaderComponent={<>
                      <Header navigation={navigation} />
                    </>}
                    showsVerticalScrollIndicator={true}
                    onEndReachedThreshold={.5}
                    renderItem={({item}) => (
                  <UserPost
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      zipCode={item.zipCode}
                      description={item.description}
                      ownerId={item.ownerId}
                      // image={item.image}
                      // profileImage={item.profileImage}
                    />
            )}/>
        </View>
      </SafeAreaView>
  );
};
export default Home;

const style = StyleSheet.create({
    userPostsContainer:{
        marginTop:15,
    },
});



