import React from 'react';
import LeftPane from './LeftPane';
import Form from "./Form"
import Header from './Header';




export default function Mobile() {
    return (
        <main  >
            <LeftPane />
            <div>
                <Header />
                <Form />
            </div>
        </main >
    )
}
