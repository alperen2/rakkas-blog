import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { user } from "src/mockData"

type UserCard = {
    avatar: string,
    username: string,
    fullName: string,
    location: string,
    bio: string,
}

const UserCard: React.FC<UserCard> = (props) => {
    return <Card style={{marginBottom:10}}>
        <Meta
            avatar={ <Avatar size="large" icon={<UserOutlined />} />}
            title={props.fullName}
            description={props.bio.substring(0, 15)}
        />
    </Card>

}

export default UserCard;