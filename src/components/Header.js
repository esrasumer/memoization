import React from 'react'

function Header({ number, data, increment }) {
    console.log("Header Components Re-Rendered")
    return (
        <div>Header-{number}
            <br />
            <br />
            <button onClick={increment}>Click</button>
            {/* <code>{JSON.stringify(data)}</code> */}
        </div>
    )
}

export default React.memo(Header);