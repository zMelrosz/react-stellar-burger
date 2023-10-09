export const BURGER_API_URL = "https://norma.nomoreparties.space/api";
export const ORDER_API_URL = "https://norma.nomoreparties.space/api/orders";

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

 export const postData = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return await res.json();
  } catch(err) {
    console.log(err);
  }
}