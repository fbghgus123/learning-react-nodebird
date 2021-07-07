import React from 'react';
import { StopOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';


function FollowList(props) {
    return (
        <List 
            style={{ marginBottom: 20 }}
            grid={{ gutter: 4, xs: 2, md: 3}}
            size="small"
            header={<div>{props.header}</div>}
            loadMore={<div style={{ textAlign: 'center', margin: '10px 0'}}><Button>더 보기</Button></div>}
            bordered
            dataSource={props.data}
            renderItem={(item) => (
                <List.Item style={{ marginTop: 20 }}>
                    <Card actions={[<StopOutlined key="stop" />]}>
                        <Card.Meta description={item.nickname}/>
                    </Card>
                </List.Item>
            )}
        />
    );
}

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}

export default FollowList;