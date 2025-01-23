import React from 'react';

function Frangmentlist() {
    const items = []
    return (
        <>
        {items.map( items => (
            <React.Fragment key={items.id}>
                <h1>Title</h1>
                <p>{items.title}</p>
            </React.Fragment> 
        ))}
            <h1>Fragment Demo</h1>
            <p>This describes the fragment demo component.</p>
        </>
    )
}

export default Frangmentlist