const getDateMessage = (date) => {
    const originalDate = new Date(date);
    const formattedDateTime = `${originalDate.getFullYear().toString()}-${(originalDate.getMonth() + 1).toString().padStart(2, '0')}-${originalDate.getDate().toString().padStart(2, '0')}, ${originalDate.getHours().toString().padStart(2, '0')}:${originalDate.getMinutes().toString().padStart(2, '0')}`;
    return (formattedDateTime);
}

export default getDateMessage;