import React from "react";
import ProfileOverview from "../components/ProfileOverview";

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
    require("../assets/images/sample-boy-1-min.jpg"),
    require("../assets/images/sample-girl-1-min.jpeg"),
    require("../assets/images/sample-girl-2-min.jpg"),
    require("../assets/images/sample-girl-3-min.jpg")
  ]
};
export default function SettingsScreen() {
  return <ProfileOverview data={sampleCandidateData} />;
}

SettingsScreen.navigationOptions = {
  title: "My Profile"
};
