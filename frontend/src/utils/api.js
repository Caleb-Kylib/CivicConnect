const API_BASE_URL = 'http://localhost:5001/api';

export const fetchBills = async () => {
    const response = await fetch(`${API_BASE_URL}/bills`);
    if (!response.ok) throw new Error('Failed to fetch bills');
    return response.json();
};

export const fetchBillById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/bills/${id}`);
    if (!response.ok) throw new Error('Bill not found');
    return response.json();
};

export const fetchLeaders = async (countyId = '') => {
    let url = `${API_BASE_URL}/leaders`;
    if (countyId) url += `?countyId=${countyId}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch leaders');
    return response.json();
};

export const voteOnBill = async (id, voteType) => {
    const response = await fetch(`${API_BASE_URL}/bills/${id}/vote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ voteType }),
    });

    if (!response.ok) throw new Error('Failed to cast vote');
    return response.json();
};
