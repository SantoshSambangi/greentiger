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
      description: [10, 20, 30, 40, 50, 60, 70],
  },
  {
      title: 0,
      subTitle: "Carbon Savings",
      description: [35, 45, 65, 75, 85],
  },
  {
      title: 0,
      subTitle: "Cost Saving",
      description: [89, 79, 69, 59, 49],
  },
  {
      title: "4",
      subTitle: "Ride Score",
      description: [250, 660, 850, 630, 259],
  },
  {
      title: 5,
      subTitle: "Current Location",
      description: (
          <div style={{ width: "100%" }}>
              <iframe
                  title="GtMap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.106148689855!2d77.61882247064747!3d12.900895488620042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f3560fa331%3A0x5277f475d1d812f4!2sGreen%20Tiger%20Mobility%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1711692800986!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      ),
  },
  {
      title: "6",
      subTitle: "Vehicle Score",
      description: [340, 540, 670, 455, 788],
  },
];

export const bmsCardData = [
  {
    title: <div>
    <h1>0.0</h1>
    <h3>Average Cell temperature (&deg;c)</h3>
  </div>,
    description: "back content2",
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
