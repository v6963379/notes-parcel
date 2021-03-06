class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + "/posts.json", {
        method: "post",
        body: JSON.stringify(post),
      });
      const response = await fetch(request);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export const apiService = new ApiService(
  "https://notes-4bf2e-default-rtdb.europe-west1.firebasedatabase.app"
);
