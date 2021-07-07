import React, {useCallback} from 'react';
import { Card,Avatar,Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../reducers/user';

function UserProfile() {
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    },[])
    
    return (
        <Card
            actions={[
                <div key="twit">짹짹<br/>0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followings">팔로워<br />0</div>,
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>HH</Avatar>}
                title="HoHyeon"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;