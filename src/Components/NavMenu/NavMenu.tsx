import { Link } from 'react-router-dom';
import { Menu, Anchor } from '@mantine/core';

export default function NavMenu(props: any) {
  return <Menu size="xs">
    {/* <Menu.Label>Application</Menu.Label> */}
    {props?.paths ? props.paths.map(({path, name}: {path: string, name: string}, i: Number) => {
        return <Menu.Item key={"MenuBtnKey#"+i}>
            <Anchor component={Link} to={path}>
                {name}
            </Anchor>
        </Menu.Item>
    }): <>no data</>}
    </Menu> 
}