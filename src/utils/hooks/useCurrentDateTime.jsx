import { useState, useEffect } from "react";
import dayjs from "dayjs";

const useCurrentDateTime = (format) => {
    const [dateTime, setDateTime] = useState(dayjs());
    useEffect(() => {
        setInterval(() => setDateTime(dayjs()), 1000);
    }, []);
    const formattedDate = dayjs(dateTime).format(format);
    return { formattedDate };
};

export default useCurrentDateTime;