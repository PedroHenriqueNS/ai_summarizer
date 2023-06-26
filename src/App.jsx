import Hero from './components/Hero.jsx';
import Demo from './components/Demo.jsx';

import './App.css'

const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
            </div>

            <div className="app">
                <Hero />
                <Demo />
            </div>

            <div className="flex bottom-0 w-full justify-center items-center border-t-2 py-2">
                <p className="font-satoshi">Original Creator: <span className="font-inter font-bold orange_gradient">JavaScript Mastery</span></p>
            </div>
        </main>
    )
}

export default App