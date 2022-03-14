// http://api.mediastack.com/v1/news?access_key=ce7b980945782634bec19b0d14c9f2bf&countries=fr
// http://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=2587dde2cad646e9bd0c9010d42f7df5
export const getDataTest = async(countryCode,category) =>{
    try{
        const url =`http://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=2587dde2cad646e9bd0c9010d42f7df5`;
        console.log(url);
        const result = await fetch(url);
        const response = await result.json();
        return response;
    }
    catch(e){
        console.log(e);
    }
}








//  //Recupere les news general en france
//  const getGeneralNews = async() =>{
//     const url =`http://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=2587dde2cad646e9bd0c9010d42f7df5`;
//     try{
//         const result = await fetch(url);
//         const response = await result.json();
//         setData(response.articles);
//         setLoadingList(false);
//     }
//     catch(e){
//         console.log(e);
//         setLoadingList(true)
//     }
// }