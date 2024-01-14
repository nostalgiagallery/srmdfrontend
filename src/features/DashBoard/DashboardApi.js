export function fetchAllData(sort) {
  return new Promise(async (resolve) => {
    const response = await fetch("/data");
    const data = await response.json();
    resolve({ data });
  });
}

export function UpdateOneData(dataToUpdate) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "/data/" + dataToUpdate.id,
      {
        method: "PATCH",
        body: JSON.stringify(dataToUpdate),
        headers: { "content-type": "application/json" },
      }
    );

    const data = await response.json();
    resolve({ data });
  });
}
