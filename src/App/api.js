const apiCalls = {

  async getReservations() {
    const response = await fetch('http://localhost:3001/api/v1/reservations');
    const data = await response.json();
    return data;
  },

  async postReservations(res) {
    const postObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(res)
    }
    const fetchResponse = await fetch('http://localhost:3001/api/v1/reservations', postObj)
    const data = await fetchResponse.json();
    return data;
  }
}

export default apiCalls;
