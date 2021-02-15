// import axios from "axios";

// const githubReducer = async (state = "No Data", action) => {
//     let res = await axios.get("https://api.esarnb.com/github/repos")
//     if (res) {
//         let data = res.data;
//         data.sort((a,b) => b.lastRepoUpdate.localeCompare(a.lastRepoUpdate))
//         return data;
//     } else return "No data";
// }

// export default githubReducer;