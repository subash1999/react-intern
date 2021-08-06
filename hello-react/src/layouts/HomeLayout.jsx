import React from "react";
import Nav from "./../components/Nav";

const HomeLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0">{children}</div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default HomeLayout;
