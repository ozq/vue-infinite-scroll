/**
 * Fetches a list of users from the API.
 *
 * @param {Object} [params] - The parameters for the API request
 * @param {number} [params.page=1] - The page number to fetch
 * @param {number} [params.size=30] - The number of results per page
 * @returns {Promise<User[]>} A promise that resolves to an array of user objects
 */
const fetchAll = async ({ page = 1, size = 30 } = {}) => {
  const response = await fetch(`https://randomuser.me/api/?page=${page}&results=${size}`);
  const { results } = await response.json();
  return results;
};

/**
 * API layer for users
 */
export const UserApi = {
  fetchAll,
};
