import React from "react"
type AccordeonPropsType  = {
    title: string,
    collapsed: boolean
}
function Accordeon(props:AccordeonPropsType) {

    console.log("Accordeon rendered")
    if ( props.collapsed ===true){
    return (<div>
        <AccordeonTitle title={props.title}/>

    </div>)}
    else {

    return (<div>
        <AccordeonTitle title={props.title}/>
        <AccordeonBody/>
    </div>)}

}
type AccordeonTitlePropsType  = {
    title: string
}
function AccordeonTitle(props:AccordeonTitlePropsType) {

    return (
        <h3>--{props.title}--</h3>
    )
}

function AccordeonBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordeon;