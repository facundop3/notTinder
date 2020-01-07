import React from "react";
import MyProfile from "../components/MyProfile";

const sampleCandidateData = {
  name: "Facundo",
  age: 22,
  datingCity: "Montevideo",
  hometown: "Montevideo",
  company: "Altimetrik",
  school: "UCU",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
  pictures: [
    require("../assets/images/sample-boy-1.jpg"),
    require("../assets/images/sample-girl-1.jpeg"),
    require("../assets/images/sample-girl-2.jpg"),
    require("../assets/images/sample-girl-3.jpg")
  ]
};
export default function SettingsScreen() {
  return <MyProfile data={sampleCandidateData} />;
}

SettingsScreen.navigationOptions = {
  title: "My Profile"
};
