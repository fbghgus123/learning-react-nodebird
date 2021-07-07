import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import CommentForm from './CommentForm';

import PostCardContent from './PostCardContent';

function PostCard({ post }) {
    const [liked, setLiked] = useState(false);
    const [commentFormOpend, setCommentFormOpend] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpend((prev) => !prev);
    }, []);
    const id = useSelector((state) => state.user.me?.id);
    return (
        <div>
            <div style={{ marginBottom: 20 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                    : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            { id && post.User.id === id ?
                            (
                                <>
                                <Button>수정</Button>
                                <Button type="danger">삭제</Button>
                                </>
                            ) : <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
            <Card.Meta 
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={<PostCardContent postData={post.content} />}
            />
            </Card>
            {commentFormOpend && (
                <div>
                    <CommentForm post={post}/>
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
            {/* <CommentForm />
            <Comemnts /> */}
            </div>
        </div>
    );
}

PostCard.PropTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.any),
        Images: PropTypes.arrayOf(PropTypes.any),
    }),
};

export default PostCard;