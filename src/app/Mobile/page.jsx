import React from 'react';
import LeftPane from './LeftPane';
import Form from "./Form"
import Header from './Header';




export default function Mobile() {
    return (
        <main  >
            <div>
                <LeftPane />
                <Header />
                <Form />
            </div>
        </main >
    )
}
