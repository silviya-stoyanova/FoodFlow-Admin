const getOrdersData = () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const data = await import("../data/mock-data.js");
      resolve(data.mockedData);
    }, 300);
  });
};

export { getOrdersData };
