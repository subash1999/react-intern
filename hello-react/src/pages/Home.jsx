import React from "react";
import PetCard from "./../components/PetCard";
import HomeLayout from "./../layouts/HomeLayout";

class Home extends React.Component {
  render() {
    return (
      <HomeLayout>
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        </div>
      </HomeLayout>
    );
  }
}

export default Home;
