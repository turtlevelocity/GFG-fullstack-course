import { useState, useEffect } from "react";

function useCustomDateHook() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);

    return (()=> clearInterval(timerID));
  }, []);

  return date;
}

export default useCustomDateHook;