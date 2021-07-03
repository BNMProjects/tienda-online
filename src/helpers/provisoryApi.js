
export const publishings = ()=> {
  const arr = [];
  for(let i = 0; i < 20; i++){
    arr.push({alt: "Phone",
    img: "https://http2.mlstatic.com/D_Q_NP_630807-MLA45658531680_042021-AB.webp",
    price:5000,
    title:"A cheap phone",
    name: "The Name",
    id:i})
  }
  return arr;
}