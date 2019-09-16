import React from 'react';

const Name =({show})=>{
const otherViews = show ? "title-otherviews show-name" : "title-otherviews hidden-name";
    return(
        <h1 className={otherViews}>Nohemí Martínez</h1>
    )

}

export default Name;