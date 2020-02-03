import { CandidateData } from "./interfaces";
export const candidatesList: CandidateData[] = [
  {
    id: "candidate-1",
    name: "Beer ",
    age: 24,
    datingCity: "Montevideo",
    hometown: "Montevideo",
    company: "Disco",
    school: "Universidad de la Republica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
    pictures: [
      require("./assets/images/beer-min.jpeg"),
      require("./assets/images/sample-girl-1-min.jpeg"),
      require("./assets/images/sample-girl-2-min.jpg"),
      require("./assets/images/sample-girl-3-min.jpg")
    ]
  },
  {
    id: "candidate-2",
    name: "Karen ",
    age: 24,
    datingCity: "Montevideo",
    hometown: "Montevideo",
    company: "Disco",
    school: "Universidad de la Republica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
    pictures: [
      require("./assets/images/sample-girl-1-min.jpeg"),
      require("./assets/images/beer-min.jpeg"),
      require("./assets/images/sample-girl-2-min.jpg"),
      require("./assets/images/sample-girl-3-min.jpg")
    ]
  },
  {
    id: "candidate-3",
    name: "Nicole ",
    age: 24,
    datingCity: "Montevideo",
    hometown: "Montevideo",
    company: "Disco",
    school: "Universidad de la Republica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
    pictures: [
      require("./assets/images/sample-girl-2-min.jpg"),
      require("./assets/images/beer-min.jpeg"),
      require("./assets/images/sample-girl-1-min.jpeg"),
      require("./assets/images/sample-girl-3-min.jpg")
    ]
  },
  {
    id: "candidate-4",
    name: "Ema",
    age: 24,
    datingCity: "Montevideo",
    hometown: "Montevideo",
    company: "Disco",
    school: "Universidad de la Republica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
    pictures: [
      require("./assets/images/sample-girl-3-min.jpg"),
      require("./assets/images/beer-min.jpeg"),
      require("./assets/images/sample-girl-1-min.jpeg"),
      require("./assets/images/sample-girl-2-min.jpg")
    ]
  },
  {
    id: "candidate-5",
    name: "Ema5",
    age: 24,
    datingCity: "Montevideo",
    hometown: "Montevideo",
    company: "Disco",
    school: "Universidad de la Republica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
    pictures: [
      require("./assets/images/sample-girl-3-min.jpg"),
      require("./assets/images/beer-min.jpeg"),
      require("./assets/images/sample-girl-1-min.jpeg"),
      require("./assets/images/sample-girl-2-min.jpg")
    ]
  }
];
export const candidate: CandidateData = {
  id: "candidate-007",
  name: "Facundo",
  age: 22,
  datingCity: "Montevideo",
  hometown: "Montevideo",
  company: "Altimetrik",
  school: "UCU",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
  pictures: [
    require("./assets/images/sample-boy-1-min.jpg"),
    require("./assets/images/sample-girl-1-min.jpeg"),
    require("./assets/images/sample-girl-2-min.jpg"),
    require("./assets/images/sample-girl-3-min.jpg")
  ]
};

export const sampleChatList = [
  {
    id: "bla-1",
    name: "Karen",
    lastMessage: "Ok, see you there !",
    avatar: require("./assets/images/sample-girl-1-min.jpeg")
  },
  {
    id: "bla-2",
    name: "Nicol",
    lastMessage: "That's weird",
    avatar: require("./assets/images/sample-girl-2-min.jpg")
  },
  {
    id: "bla-3",
    name: "Ana",
    lastMessage: "Hi",
    avatar: require("./assets/images/sample-girl-3-min.jpg")
  }
];

export const sampleImages = [
  require("./assets/images/dog-1-min.jpeg"),
  require("./assets/images/beer-min.jpeg"),
  require("./assets/images/dog-2-min.jpeg")
];
