import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Carousel from "./../components/Carousel";
import PetCard from "./../components/PetCard";
import HomeLayout from "./../layouts/HomeLayout";

const query = () => axios(`${process.env.REACT_APP_API_BASE_URL}breed/`);

function Home() {
  const { data, isLoading, error } = useQuery("sales", query);

  if (isLoading) return "Loading...";
  if (error) return "Oops!";
  console.log(data);
  return (
    <HomeLayout>
      <div className="h-auto py-4">
        <Carousel />
      </div>
      <div className="min-h-screen bg-gray-100 ">
        {data.data.results.map((res) => (
          <div key={res.id}>
            <PetCard Breed={res} />
            <br />
          </div>
        ))}
      </div>
    </HomeLayout>
  );
}

export default Home;
