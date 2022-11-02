import { BookOutlined, FileTextOutlined, HeartFilled, HeartOutlined, HomeOutlined, PhoneOutlined, ProfileOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { StyledLink } from "rakkasjs"

const activeStyle = { fontWeight: "bold" };

const items: MenuProps['items'] = [
    { icon: <HomeOutlined />, label: <StyledLink href="/" activeStyle={activeStyle}> Home </StyledLink>, key: 'item-1', },
    { icon: <BookOutlined />, label: <StyledLink href="/reading-list" activeStyle={activeStyle}> Reading List </StyledLink>, key: 'item-2', },
    { icon: <HeartOutlined />, label: <StyledLink href="/favorities" activeStyle={activeStyle}> Favorites </StyledLink>, key: 'item-3', },
    { icon: <UserOutlined />, label: <StyledLink href="/about" activeStyle={activeStyle}> Profile </StyledLink>, key: 'item-4', },

];

// burada bu component için bir ant'in menu type'ı verilebilir mi?
const HomeMenu = () => (
    <Menu theme="light" mode="inline" defaultSelectedKeys={['item-1']} items={items} />
)


export default HomeMenu;

