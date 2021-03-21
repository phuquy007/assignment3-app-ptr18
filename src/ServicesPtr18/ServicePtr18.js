const API_URL = "http://localhost:8000/";

export async function getInventory(){
    return fetch(`${API_URL}inventoryPtr18`,
    {
        methods: 'GET',
        headers: { 'Content-Type': 'application/json' }
        
    })
    .then(response => response.json());
}