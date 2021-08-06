import React from "react";

function img_url() {
  return (
    "https://placedog.net/640/480?random=" + Math.floor(Math.random() * 100000)
  );
}
class PetCard extends React.Component {
  render() {
    return (
      <div className="container flex ">
        <div className="flex-shrink md:flex-shrink-0">
          <div className="max-w-xs">
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img className="rounded-t-lg" src={img_url()} alt="" />
              <div className="py-6 px-8 rounded-lg bg-white">
                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                  {this.props.Breed.name}, ID: ({this.props.Breed.id})
                </h1>
                <h3 className="text-gray-700 font-bold text-md mb-3 hover:text-gray-900 hover:cursor-pointer">
                  Category:&nbsp;
                  <span className="text-gray-700 tracking-wide font-normal">
                    {this.props.Breed.category.name}
                  </span>
                </h3>
                <p className="text-gray-700 tracking-wide">
                  {this.props.Breed.description}
                </p>
                <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  Buy Now
                </button>
              </div>
              <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                <span className="text-md">${this.props.Breed.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PetCard;
