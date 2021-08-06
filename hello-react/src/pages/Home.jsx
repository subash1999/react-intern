import React from "react";
import { useQuery } from "react-query";
import PetCard from "./../components/PetCard";
import HomeLayout from "./../layouts/HomeLayout";

const query = async () => {
  fetch(`${process.env.REACT_APP_API_BASE_URL}sale/`).then((response) =>
    response.json()
  );
};

function Home() {
  const { data, isLoading, error } = useQuery("sales", query);
  console.log([data, isLoading, error]);
  if (isLoading) return "Loading...";
  if (error) return "Oops!";
  return (
    <HomeLayout>
      <div className="min-h-screen bg-gray-100 ">
        {data}
        <PetCard />
        <br />
        <PetCard />
      </div>
    </HomeLayout>
  );
}

export default Home;
