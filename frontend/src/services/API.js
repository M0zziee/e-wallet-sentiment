const baseUrl = import.meta.env.VITE_API_URL;

export const fetchData = async () => {
  const response = await fetch(`${baseUrl}/users`);
  return response.json();
};