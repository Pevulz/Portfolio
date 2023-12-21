import React from "react";
import Card from "./Card";

function Experience() {
  const experienceData = [
    {
      id: "starbucks",
      companyTitle: "Starbucks",
      logo: "https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo-500x281.png",
      detail: "details",
      time: "July 2023 - Present",
    },
    {
      id: "yayatea",
      companyTitle: "Yaya Tea",
      logo: "https://yayatea.com/wp-content/uploads/2022/02/cropped-yaya-hi.png",
      detail:
        "Managed monetary transaction using cash register, Prepared beverages for customers quickly and effectively, Maintain a clean area for customers/coworkers, Greeting customers and providing customer service to customers",
      time: "April 2022 - July 2023",
    },
    {
      id: "hunan",
      companyTitle: "Hunan Chinese Restaurant",
      logo: "https://t3.ftcdn.net/jpg/06/15/38/38/240_F_615383830_0C5bOBwUz9pMx9iZGT8VAuvbLX1MWisk.jpg",
      detail:
        "Managed monetary transaction using cash register, Packaging products for pickups/deliveries, Restocking establishment with necessary products",
      time: "July 2021 - September 2021",
    },
    {
      id: "adventurerpark",
      companyTitle: "Adventurer's Park",
      logo: "https://adventurerspark.com/wp-content/uploads/2020/03/logo.png",
      detail:
        "Managed monetary transaction using cash, Restocked miscellaneous items such as prizes, Operated work stations in safe environments, Provided high quality customer service to customers",
      time: "June 2019 - November 2019",
    },
    {
      id: "funfunsaturday",
      companyTitle: "Fun Fun Saturday",
      logo: "https://www.ueaa.org/wp-content/uploads/2022/01/UeaaBlue_logo-title-1.svg",
      detail:
        "Assisted in two classes with students ranging from 6 - 13 (Kickball and English), Ensured a safe environment during events like Sport Day, Prepared physical and literary elements for classroom experience",
      time: "June 2018 - August 2018",
    },
  ];

  return (
    <>
      <div className="px-10 w-screen h-screen bg-gray-400 flex items-center justify-between">
        {experienceData.map((experienceData) => (
          <div key={experienceData.id}>
            <Card data={experienceData}></Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
