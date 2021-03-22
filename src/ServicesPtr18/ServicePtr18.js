const API_URL = "http://ec2-18-232-51-38.compute-1.amazonaws.com:8000/";

export async function getInventory() {
  return fetch(`${API_URL}inventoryPtr18`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
}

export async function getCart() {
  return fetch(`${API_URL}cartPtr18`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
}

export async function addItemToCart_WS(sku) {
  const data = JSON.stringify(sku);
  return fetch(`${API_URL}cartPtr18`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: data,
  }).then((response) => response.json());
}

export async function deleteItemFromCart_WS(sku) {
  const data = JSON.stringify(sku);
  return fetch(`${API_URL}cartPtr18`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: data,
  }).then((response) => response.json());
}

export async function checkout_WS() {
  return fetch(`${API_URL}cartPtr18/checkoutPtr18`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
  }).then((response) => response.json());
}
