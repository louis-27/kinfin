export const fetcher = async (url: string, data = undefined) => {
  return fetch(url, {
    method: data ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status < 200 || res.status > 399) {
      throw new Error();
    }
    res.json();
  });
};
