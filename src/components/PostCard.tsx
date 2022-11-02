
import { BookOutlined, CommentOutlined, HeartOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Card, Col, Image, Row, Tag, Typography } from "antd"
import React from "react"
import css from "./postCard.module.css";
const { Title, Text } = Typography;

type PostCard = {
    image?: string,
    title: string,
    comment: number,
    like: number
    tags?: Array<String>,
    date: string,
    author: string,
}

const PostCard: React.FC<PostCard> = (props) => {
    return <Card className={css.card} bodyStyle={{ padding: 10 }}>
        <Row style={{ marginBottom: 10 }}>
            <Col span={24}>
                <Image preview={false} src="https://picsum.photos/700/300" />
            </Col>
        </Row>
        <Row style={{ padding: 10 }}>
            <Col>
                <Avatar style={{ marginRight: 10 }} size="large" icon={<UserOutlined />} />
            </Col>
            <Col>
                <Text>Alperen Durmuş</Text> <br />
                <Text type="secondary">Oct 25</Text>
            </Col>
        </Row>
        <Row gutter={[0, 20]} style={{ padding: "10px 0" }}>
            <Col offset={2} span={22}>
                <Title style={{ marginBottom: 0 }} level={3}> {props.title}</Title>
                {props.tags?.map(tag => <Tag style={{ border: "none" }} > #{tag} </Tag>)}
            </Col>
        </Row>
        <Row>
            <Col offset={2} span={8} style={{ display: "flex", alignItems: "end" }}>
                <Button className={css.cartButton} style={{ marginRight: 5 }} size="small" icon={<HeartOutlined />}>
                    {props.like} Like
                </Button>
                <Button className={css.cartButton} size="small" icon={<CommentOutlined />}>
                    {props.comment} Comment
                </Button>
            </Col>
            <Col offset={12} span={2}>
                <Button className={css.cartButton} size="large" icon={<BookOutlined />}>
                </Button>
            </Col>
        </Row>
    </Card>
}

export default PostCard;