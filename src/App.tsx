import React from 'react';

import './App.css';
import Accordeon from "./components/accordeon/accordeon";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log ("App rendering")

    return (
    <div>

        <PageTitle title={"This is app component"}/>

        <PageTitle title={"users"}/>
        <PageTitle title={"My friends"}/>


        Article 1
        <Rating value={3}/>
        <Accordeon title={"Menu"} collapsed={true}/>
        <Accordeon title={"Users"} collapsed={false}/>



        Article 2
        <Rating value={4}/>
        <Rating value={0}/>
        <Rating value={2}/>



    </div>
  );
}
type PageTitlePropsType ={
    title: string
}
function PageTitle(props:PageTitlePropsType){

    console.log ("PageTitle rendering")

    return <h1>{props.title}</h1>
}
export default App;
