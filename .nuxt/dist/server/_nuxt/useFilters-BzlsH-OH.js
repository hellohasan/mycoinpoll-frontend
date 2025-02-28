const useFilters = () => {
  const customDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-CA");
  };
  const customDateTime = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-CA");
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    return `${formattedDate} ${formattedTime}`;
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return {
    customDate,
    customDateTime,
    formatDate
  };
};
export {
  useFilters as u
};
//# sourceMappingURL=useFilters-BzlsH-OH.js.map
