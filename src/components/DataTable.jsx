let data = null
// console.log(data);

export const setData = (obj) => {
   data = obj;
   console.log(data);
   console.log(obj);
}

const DataTable = () => {
    
if(data) {
    console.log(data);
    data.forEach(element => {
        console.log(`Category: ${element['categories'][0]['title']}`);
        console.log(`Title: ${element['title']}`);
        console.log(`Date: ${element['geometry'][0]['date']}`);
    })
  return (
    data.forEach(element => {
        let div1 = document.createElement("div")
        div1.className = "flex flex-col justify items-center bg-orange-500 bg-cover bg-fixed";
        let div2 = document.createElement("div");
        div2.className = "flex flex-col justify-center w-1/2 mb-5";
        let div3 = document.createElement("div");
        div3.className = "bg-white bg-opacity-50 rounded m-5 py-3 px-5 text-center text-xl shadow-lg shadow-indigo-900 items-center justify-items-between content-center";
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        p1.innerHTML = `Category: ${element['categories'][0]['title']}`;
        p2.innerHTML = `Title: ${element['title']}`;
        p3.innerHTML = `Date: ${element['geometry'][0]['date']}`;
        p4.innerHTML = `Location: Latitude: ${element['geometry'][0]['coordinates'][0]} Longitude: ${element['geometry'][0]['coordinates'][1]}`
        div3.append(p1)
        div3.append(p2)
        div3.append(p3)
        div3.append(p4)
        div2.append(div3)
        div1.append(div2)
        document.body.appendChild(div1)
    })
    )
} else{
    console.log(data);
  return (
        <></>
  )
}
}

export default DataTable