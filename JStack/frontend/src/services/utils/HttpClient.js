import APIError from "../../errors/APIError";

class HttpClient {
  constructor(baseURL) {
    this.baseURL = 'http://localhost:3000';
  }

  async get(url) {
    const response = await fetch(`${this.baseURL}${url}`);

    let body = null;
    const contentType = response.headers.get('content-type');
    if(contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }
    
    // return Promise.reject(response);
    // throw new Error(body?.error || `${response.status} - ${response.statusText}`);
    throw new APIError(response, body);
  }
}

export default HttpClient;