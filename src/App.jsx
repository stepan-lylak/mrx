import {NavLink, Outlet} from "react-router-dom";
import {Button, Flex, Typography} from "antd";

const {Title} = Typography;

import './App.scss'


function App() {
    return (
        <div className="layout-container">
            <header>
                <Title level={2}>MRX</Title>
                <Flex gap="small" wrap="wrap">
                    <NavLink to="/">
                        {({isActive}) => (
                            <Button type={isActive ? 'primary' : 'default'}>HOME</Button>
                        )}
                    </NavLink>
                    <NavLink to="/setup">
                        {({isActive}) => (
                            <Button type={isActive ? 'primary' : 'default'}>SETUP</Button>
                        )}
                    </NavLink>
                </Flex>
            </header>
            <Outlet/>
        </div>
    )
}

export default App
