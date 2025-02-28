// composables/useFilters.js

export const useFilters = () => {
  /**
   * Format date string to YYYY-MM-DD format
   * @param {string} dateString - Date string to format
   * @returns {string} Formatted date string
   */
  const customDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    return date.toLocaleDateString("en-CA");
  };

  /**
   * Format date string to YYYY-MM-DD HH:MM:SS AM/PM format
   * @param {string} dateString - Date string to format
   * @returns {string} Formatted date and time string
   */
  const customDateTime = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-CA");
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return `${formattedDate} ${formattedTime}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return {
    customDate,
    customDateTime,
    formatDate,
  };
};
