import React from 'react';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const DashboardPage = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Container fixed>
            <Tabs value={value}  aria-label="icon label tabs example">
                <Tab label="RECENTS" />
                <Tab label="FAVORITES" />
                <Tab label="NEARBY" />
            </Tabs>
            <h1>Dashboard</h1>
        </Container>
    )
}

export default DashboardPage;