// src/Dday.jsx
import { useState, useEffect } from 'react';

function Dday({ targetDate }) {
  const [dDay, setDDay] = useState('');

  useEffect(() => {
    const graduationDate = new Date(targetDate);

    function calculateDDay() {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      graduationDate.setHours(0, 0, 0, 0);

      const diffTime = graduationDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 0) {
        setDDay(`D-${diffDays}`);
      } else if (diffDays === 0) {
        setDDay(' D-DAY!');
      } else {
        setDDay(`+${Math.abs(diffDays)}일 지남`);
      }
    }

    calculateDDay();
    const timer = setInterval(calculateDDay, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <h2> 졸업까지: {dDay}</h2>
  );
}

export default Dday;
