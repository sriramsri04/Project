import React from 'react';
import ReactDOM from  'react-dom/client';

class Hello extends React.Component{
    render()
    {
        return(
            <h1>I am at Hello class component</h1>

        )
    }
}
class ClassComponent extends React.Component{
    render()
    {
        return(
            <>
            <Hello />
            <ul>
                <li>MAngo</li>
                <li>Apple</li>
                <li>Orange</li>
                <li>PineApple</li>
            </ul>
            
            </>
        )
    }
}
export default ClassComponent