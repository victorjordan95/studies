import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL || 'http://localhost:3000';
  }

  get(path, options) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
    });
  }

  post(url, options) {
    return this.makeRequest(url, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    });
  }

  async makeRequest(path, options) {
    const url = `${this.baseURL}${path}`;
    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.append(key, value);
      });
    }

    const response = await fetch(url, {
      method: options.method,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    let responseBody = null;
    const contentType = response.headers.get('content-type');
    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (!response.ok) {
      throw new APIError(responseBody, response.status);
    }

    return responseBody;
  }
}

export default HttpClient;
