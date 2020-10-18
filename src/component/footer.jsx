import React from 'react';

 class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <h1 style={{color:'brown'}}> Footer </h1>
                </div>
        )
    }
}
function Hello (){
    return(
        <h1>hello</h1>       
    );
}
export{ 
    Footer,
    Hello
};