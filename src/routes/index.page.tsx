import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Layout, Row, Segmented } from "antd"
import PostCard from "src/components/PostCard";
const { Sider, Content } = Layout;

import { posts } from "src/mockData";

export default function HomePage() {
	return (
		<Content>
			<Row style={{marginBottom: 10}}>
				<Col offset={2}>
					<Segmented options={['Revelant', 'Latest', 'Top']} />
				</Col>
				<Col offset={8}>
					<Segmented options={['Week', 'Month', 'Year', "Infinity"]} />
				</Col>
			</Row>
			<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
				{posts.map(post => {
					return <PostCard {...post} />
				})}
			</div>
		</Content>
	);
}
