import axios from "axios";

async function getData(user_id) {
  try {
    const [user, posts] = await Promise.all([
      axios(`https://jsonplaceholder.typicode.com/users/${user_id}`),
      axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
    ]);

    const userData = user.data;
    const postsData = posts.data;

    const objects = { ...userData, posts: postsData }; // Obje birleştirme

    console.log(objects) ;
  } catch (error) {
    console.error("Veri alınırken bir hata oluştu:", error);
    throw error; // Hata fırlatma
  }
}

export default getData;
