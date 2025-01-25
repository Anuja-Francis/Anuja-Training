import React, {useEffect, useState, useLayoutEffect} from "react";

const Layout = () => {
    const [toggle, setToggle] = useState(false);
    
    useLayoutEffect(() => {
        console.log("useLayoutEffect")
    }, [toggle]);

    useEffect(() => {
        console.log("useEffect")
    }, [toggle]);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {
                toggle && <h4>God Bless you</h4>
            }
        </>
    )
}
export default Layout;