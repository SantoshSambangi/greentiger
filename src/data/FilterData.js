// export const FilterData = [
//   {
//     state: [
//         "andhra",
//         "telangana",
//     ],
//     locality: [
//         "vizag",
//         "tirupati"
//     ],
//     deviceId: [1,2,3],
//     brand: [
//         "nike",
//         "adidas"
//     ],
//     modal: [
//         "large",
//         "small",
//         "xl",
//     ],
//     age:[20,25,30,34,36,37],
//     gender: ["male","female", "other"],
//     proffesion:["private", "public", "others"]
//   },
// ];

export const FilterData = [
  {
    name: "state",
    options: [
      { value: "andhra", label: "AndhraPradesh" },
      // { value: "telangana", label: "Telangana" }
    ],
  },
  {
    name: "locality",
    options: [
      { value: "vizag", label: "Vizag" },
      // { value: "tirupati", label: "Tirupati" }
    ],
  },
  {
    name: "deviceId",
    options: [
      { value: 1, label: "Device 1" },
      // { value: 2, label: "Device 2" },
      // { value: 3, label: "Device 3" }
    ],
  },
  {
    name: "brand",
    options: [
      { value: "nike", label: "Nike" },
      // { value: "adidas", label: "Adidas" },
    ],
  },
  {
    name: "modal",
    options: [
      { value: "large", label: "Large" },
      // { value: "small", label: "Small" },
      // { value: "xl", label: "XL" },
    ],
  },
  {
    name: "age",
    options: [
      { value: 20, label: "20" },
      // { value: 25, label: "25" },
      // { value: 30, label: "30" },
      // { value: 34, label: "34" },
      // { value: 36, label: "36" },
      // { value: 37, label: "37" },
    ],
  },
  {
    name: "gender",
    options: [
      { value: "male", label: "Male" },
      // { value: "female", label: "Female" },
      // { value: "other", label: "Other" },
    ],
  },
  {
    name: "profession",
    options: [
      { value: "private", label: "Private" },
      // { value: "public", label: "Public" },
      // { value: "others", label: "Others" },
    ],
  },
];
