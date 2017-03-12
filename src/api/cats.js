class CatApi {
  static getAllCats() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(
      response => response.json()
    ).catch(error => error)
  }
}

export default CatApi
