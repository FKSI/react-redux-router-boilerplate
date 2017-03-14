const getAllCats = client => (
  client.get('https://jsonplaceholder.typicode.com/posts')
  .then(payload => payload)
  .catch(error => console.log(error))
)

export default getAllCats
