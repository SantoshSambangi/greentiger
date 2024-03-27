import ExpChart from "../components/chartGraphs/ExpChart";
import LineChart from "../components/chartGraphs/LineChart";
import PieChart from "../components/chartGraphs/PieChart";

export const FilterData = [
  {
    name: "state",
    options: [
      { value: "andhra", label: "AndhraPradesh" },
      { value: "telangana", label: "Telangana" },
    ],
  },
  {
    name: "locality",
    options: [
      { value: "vizag", label: "Vizag" },
      { value: "tirupati", label: "Tirupati" },
    ],
  },
  {
    name: "deviceId",
    options: [
      { value: "1", label: "Device 1" },
      { value: "2", label: "Device 2" },
      { value: "3", label: "Device 3" },
    ],
  },
  {
    name: "brand",
    options: [
      { value: "nike", label: "Nike" },
      { value: "adidas", label: "Adidas"},
    ],
  },
  {
    name: "modal",
    options: [
      { value: "large", label: "Large" },
      { value: "small", label: "Small" },
      { value: "xl", label: "XL" },
    ],
  },
  {
    name: "age",
    options: [
      { value: 20, label: "20" },
      { value: 25, label: "25" },
      { value: 30, label: "30" },
      { value: 34, label: "34" },
      { value: 36, label: "36" },
      { value: 37, label: "37" },
    ],
  },
  {
    name: "gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "profession",
    options: [
      { value: "private", label: "Private" },
      { value: "public", label: "Public" },
      { value: "others", label: "Others" },
    ],
  },
];

//Cards Data for Three pages

export const vehicleCardData = [
  {
    title: (
      <div>
        <h1>0</h1>
        <h3>Total Distance (Km)</h3>
      </div>
    ),
    description: <ExpChart />,
  },
  {
    title: "front content2",
    description: <LineChart />,
  },
  {
    title: "front content3",
    description: <PieChart />,
  },
  {
    title: "front content4",
    description: "back content4",
  },
  {
    title: "front content5",
    description: "back content5",
  },
  {
    title: "front content6",
    description: "back content6",
  },
];

export const bmsCardData = [
  {
    title: <div>
    <h1>0.0</h1>
    <h3>Average Cell temperature (&deg;c)</h3>
  </div>,
    description: <ExpChart/>,
  },
  {
    title: "front content2",
    description: "back content2",
  },
  {
    title: "front content3",
    description: "back content3",
  },
  {
    title: "front content4",
    description: "back content4",
  },
  {
    title: "front content5",
    description: "back content5",
  },
  {
    title: "front content6",
    description: "back content6",
  },
];

export const vcuCardData = [
  {
    title: (
      <div>
        <h1>0.0</h1>
        <h3>Average Motor temperature (&deg;c)</h3>
      </div>
    ),
    description: "vcu backcontent2",
  },
  {
    title: "front content2",
    description: "back content2",
  },
  {
    title: "front content3",
    description: "back content3",
  },
  {
    title: "front content4",
    description: "back content4",
  },
  {
    title: "front content5",
    description: "back content5",
  },
  {
    title: "front content6",
    description: "back content6",
  },
];
