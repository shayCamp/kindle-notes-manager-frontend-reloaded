import React from "react";

interface LandingPageProps {}

const LandingPage = ({ ...props }: LandingPageProps) => {
  console.log(props);
  return (
    <div>
      <h1>LandingPage</h1>
    </div>
  );
};

export default LandingPage;
