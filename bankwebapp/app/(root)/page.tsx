import React from "react";
import HeaderBox from '@/components/HeaderBox';

const Home = () => {
    const loggedInUser = {firstName: 'Buebu'};

    return (
       <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title="Welcome to your Bank,"
                    user={loggedInUser?.firstName || 'Guest'}
                    subtext="Your money is safe with us"
                />
            </header>
        </div>
       </section>
    );
}

export default Home