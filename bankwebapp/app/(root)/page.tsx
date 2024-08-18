import React from "react";
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

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
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35} />
            </header>
        </div>
       </section>
    );
}

export default Home