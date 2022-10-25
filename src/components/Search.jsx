import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" name="" placeholder="Find a user"/>
      </div>
      <div className="userChat">
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQE7VCTojWrTgA/profile-displayphoto-shrink_400_400/0/1617028820663?e=1672272000&v=beta&t=rSXIxNpAeXrrXM_g33B5cucnndqEdWEMD4RlU4WMeq8" alt="" />
        <div className="userChatInfo">
          <span>Victor</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
