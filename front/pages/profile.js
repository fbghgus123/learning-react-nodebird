import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';

function profile() {

    const followerList = [{nickname: '제로초'}, {nickname: '바보'}, {nickname: '노드버드오피셜'}];
    const followingList = [{nickname: '제로초'}, {nickname: '바보'}, {nickname: '노드버드오피셜'}];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NickNameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList head="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    );
}

export default profile;