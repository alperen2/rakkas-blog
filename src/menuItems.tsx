import type { MenuProps } from 'antd';
import { StyledLink } from "rakkasjs"

const activeStyle = { fontWeight: "bold" };

const items: MenuProps['items'] = [
    { label: <StyledLink href="/" activeStyle={activeStyle}> Home </StyledLink>, key: 'item-1', },
    { label: <StyledLink href="/test" activeStyle={activeStyle}> Test </StyledLink>, key: 'item-2', },
];

export default items;