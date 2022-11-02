import { Head, Layout } from "rakkasjs"
import { Badge, Button, Col, Image, Row } from 'antd';
import { Layout as AntLayout } from "antd";
import 'antd/dist/antd.css';
import css from "./layout.module.css";
import Search from "antd/lib/input/Search";
import Sider from "antd/lib/layout/Sider";
import HomeMenu from "src/components/HomeMenu";
import UserCard from "src/components/UserCard";
import { user } from "src/mockData";
import { NotificationOutlined } from "@ant-design/icons";

const { Header, Footer } = AntLayout;


const MainLayout: Layout = ({ children }) => (
    <>
        <Head title="Dev.to" />
        <AntLayout>
            <Header className={css.header}>
                <Row justify="space-between" style={{ width: "60%" }}>
                    <Col>
                        <Image src="../../public/images/logo.png" width={60} />
                    </Col>
                    <Col style={{ display: "flex", alignItems: "center" }}>
                        <Search size="large" style={{ width: "800px" }} placeholder="Search an article" />
                    </Col>
                    <Col>
                        <Badge count={5}>
                            <Button size="middle" icon={<NotificationOutlined />}></Button>
                        </Badge>
                    </Col>
                </Row>
            </Header>
            <AntLayout className={css.contentLayout} hasSider>
                {children}
                <Sider className={css.sider} width={250} theme="light">
                    <UserCard {...user} />
                    <HomeMenu />
                </Sider>
            </AntLayout>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </AntLayout>
    </>
)

export default MainLayout;
