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
      title: 0,
      subTitle: "Total Distance (Km)",
      description: [10, 50, 10, 40, 20, 80],
      labels :["sun","mon","tue","wed","thu","fri"],
      // colors: ["#84fffe", "#9edded", "#dedede", "#4e4e4e"],
  },
  {
      title: 0,
      subTitle: "Carbon Savings",
      description: [35, 45, 65, 15, 85,65],
      labels: ["Low Emission", "Medium Emission", "High Emission","Very High Emission","High Emission"],
      // colors: ["#84fffe", "#9edded", "#dedede", "#4e4e4e"],
  },
  {
      title: 0,
      subTitle: "Cost Saving",
      description: [89, 79, 69, 59, 49],
      labels: ["Savings1", "Savings2", "Savings3", "Savings4", "Savings5"],
      colors: ["#ffa500", "#008000", "#0000ff", "#800080"],
  },
  {
      title: "4",
      subTitle: "Ride Score",
      description: [250, 660, 850, 630, 259],
      labels: ["Excellent", "Good", "Average", "Poor","A++"],
      colors: ["#ff0000", "#ffa500", "#ffff00", "#008000","#ff0000"],
  },
  {
      title: 5,
      subTitle: "Current Location",
      // description: <LocationMap />
      latitude: 12.97675,
      longitude:77.57528,
  },
  {
      title: "6",
      subTitle: "Vehicle Score",
      description: [250, 660, 850, 630, 259],
      labels: ["Grade A", "Grade B", "Grade C", "Grade D"],
      colors: ["#ff4500", "#ffd700", "#7cfc00", "#00ffff"],
  },
];


export const bmsCardData = [
  {
      title: 0,
      subTitle: "Total Distance (Km)",
      description: [10, 50, 10, 40, 20, 80],
      labels :["sun","mon","tue","wed","thu","fri"],
      // colors: ["#84fffe", "#9edded", "#dedede", "#4e4e4e"],
  },
  {
      title: 0,
      subTitle: "Carbon Savings",
      description: [35, 45, 65, 75, 85,65],
      labels: ["Low Emission", "Medium Emission", "High Emission","Very High Emission","High Emission"],
      // colors: ["#84fffe", "#9edded", "#dedede", "#4e4e4e"],
  },
  {
      title: 0,
      subTitle: "Cost Saving",
      description: [89, 79, 69, 59, 49],
      labels: ["Savings1", "Savings2", "Savings3", "Savings4", "Savings5"],
      colors: ["#ffa500", "#008000", "#0000ff", "#800080"],
  },
  {
      title: "4",
      subTitle: "Ride Score",
      description: [250, 660, 850, 630, 259],
      labels: ["Excellent", "Good", "Average", "Poor","A++"],
      colors: ["#ff0000", "#ffa500", "#ffff00", "#008000","#ff0000"],
  },
  {
      title: 5,
      subTitle: "Current Location",
      description: "Back content"
  },
  {
      title: "6",
      subTitle: "Vehicle Score",
      description: [250, 660, 850, 630, 259],
      labels: ["Grade A", "Grade B", "Grade C", "Grade D"],
      colors: ["#ff4500", "#ffd700", "#7cfc00", "#00ffff"],
  },
];


export const vcuCardData = [
  {
    title: 0,
    subTitle:"Avg Motor temp",
    description: [35, 45, 65, 75, 85,65],
  },
  {
    title: 0,
    subTitle: "Avg Controller temp",
    description: [89, 79, 69, 59, 49,60] ,
  },
  {
    title: 0,
    subTitle: "Motor Controller Faults",
    description: [340, 540, 670, 455, 788,345] ,
  },
  {
    title: 0,
    subTitle: "Iot Devices",
    description:[340, 540, 670, 455, 788,345],
  },
  {
    title: 0,
    subTitle: "Valid Data Packets",
    description:"LineChart will come heare",
  },
  {
    title: 0,
    subTitle:  "TBC",
    description:"LineChart will come heare" ,
  },
];
