import React from 'react';
import Button from './Button/index';
import Input from './Input/index';
import Checkbox from './Input/Checkbox';

function App() {
    return (
        <>
            <Button type="button">Button</Button>
            <Input placeholder="First name" />
            <Checkbox />
        </>
    );
}

export default App;
