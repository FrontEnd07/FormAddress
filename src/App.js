import React from 'react';
import Header from '@view/Header'
import Order from '@view/Order'

function App() {
    return (
        <div className='app'>
            <Header/>
            <main>
                <Order/>
            </main>
        </div>
    );
}

export default App;
