import { Col, Layout, Row, Segmented } from "antd"
import { Page, useQuery } from "rakkasjs";
import PostCard from "src/components/PostCard";
const { Content } = Layout;
import { getPosts } from "src/db/post";
import moment from 'moment';


const HomePage:Page = () => {

	const preloaded = useQuery("preload", () => {
		return getPosts();
	});

	return (
		<Content>
			<Row style={{marginBottom: 10}}>
				<Col offset={3}>
					<Segmented options={['Revelant', 'Latest', 'Top']} />
				</Col>
				<Col offset={7}>
					<Segmented options={['Week', 'Month', 'Year', "Infinity"]} />
				</Col>
			</Row>
			<Row>
				<Col offset={3}>
					<div style={{ width:"720px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
						{preloaded.data?.map(post => {
							return <PostCard title={post.title} image={post.image} postTags={post.postTags} key={post.id} date={post.created_at} />
						})}
					</div>
				</Col>
			</Row>
		</Content>
	);
}
export default HomePage;

HomePage.preload = async (ctx) => {
	if (!ctx.queryClient.getQueryData("preload")) {
		ctx.queryClient.prefetchQuery("preload", getPosts());
	}
}