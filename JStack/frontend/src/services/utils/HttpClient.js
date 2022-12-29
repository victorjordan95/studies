class HttpClient {
  constructor(baseURL) {
    this.baseURL = 'http://localhost:3000';
  }

  async get(url) {
    const response = await fetch(`${this.baseURL}${url}`);
    const data = await response.json();
    
    return data;
  }
}

export default HttpClient();