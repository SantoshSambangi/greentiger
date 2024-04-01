// import React, { useState } from 'react';
// import { DatePicker } from 'antd';
// const { RangePicker } = DatePicker;
// const DatePickerAntD = () => {
//   const [value, setValue] = useState(null);
//   console.log(value)
//   const disabledDate = (current, { from }) => {
//     if (from) {
//       return Math.abs(current.diff(from, 'days')) >= 365;
//     }
//     return false;
//   };
//   return <RangePicker value={value} disabledDate={disabledDate} onChange={setValue} />;
// };
// export default DatePickerAntD;

// import React, { useState } from 'react';
// import { DatePicker } from 'antd';
// const { RangePicker } = DatePicker;

// const DatePickerAntD = () => {
//   const [value, setValue] = useState([]);
//   console.log(value)

//   const disabledDate = (current) => {
//     // Disable dates that are more than 7 days away from the start date
//     if (value && value[0]) {
//       const startDate = value[0];
//       const endDate = value[1];
//       const diff = Math.abs(current.diff(startDate, 'days'));
//       return diff > 7 || current.isBefore(startDate) || current.isAfter(endDate);
//     }
//     return false;
//   };

//   return (
//     <RangePicker
//       value={value}
//       disabledDate={disabledDate}
//       onChange={(dates) => setValue(dates)}
//     />
//   );
// };

// export default DatePickerAntD;

import React, { useState } from 'react';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const DatePickerAntD = () => {
  const [value, setValue] = useState([]);
  console.log(value)
  const disabledDate = (current) => {
    // Disable dates that are more than 7 days away from the start date
    if (value && value[0]) {
      const startDate = value[0];
      const endDate = value[1];
      const diff = Math.abs(current.diff(startDate, 'days'));
      return diff > 7 || current.isBefore(startDate) || current.isAfter(endDate);
    }
    return false;
  };

  const handleChange = (dates) => {
    setValue(dates);
    if (dates && dates.length === 2) {
      const [startDate, endDate] = dates;
      console.log('Start Date:', startDate.format('YYYY-MM-DD'));
      console.log('End Date:', endDate.format('YYYY-MM-DD'));
    }
  };

  return (
    <RangePicker
      value={value}
      disabledDate={disabledDate}
      onChange={handleChange}
    />
  );
};

export default DatePickerAntD;