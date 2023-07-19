"use client"

import DishCard from "@/components/DishCard"
import Nav from "@/components/Nav"

const categories = ['Appetizers', 'Entrees', 'Desserts', 'Specials']

/* export const getServerSideProps = async () => {
  const res = await fetch("https://3wknjhpnq4.execute-api.us-east-1.amazonaws.com/spoontoo_sample/menu_brand?brandID=1");
  const data = await res.json();  
  console.log(data);

  return {
    props: {
      data,
    },
  };
}; */
import { useEffect, useState } from "react"

export default function Home({data}) {
  const [brandDetails, setBrandDetails] = useState([])  
  const [brandMenu, setBrandMenu] = useState([])

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://3wknjhpnq4.execute-api.us-east-1.amazonaws.com/spoontoo_sample/menu_brand?brandID=1");
      data = await data.json();
      console.log(data);
      setBrandMenu(data.menu);
      setBrandDetails(data.brand[0]);            
    }
    fetchData();    
  }, [])
  
  return (
    <>
    <main className="bg-spoon-grey portrait:hidden flex min-h-screen flex-col items-center justify-center p-8 pt-12 gap-10">
      <div className>
        <h1 className="text-spoon-red font-medium text-3xl">
          Oops!
        </h1>
      </div>
      <div className="bg-spoon-red text-spoon-beige rounded-2xl p-6 w-96 text-justify shadow-2xl">        
        <p>
          This experience is designed to be viewed in portrait. Please rotate your device to view the menu.
        </p>
      </div>      
    </main>

    <main className="landscape:hidden">
      <Nav brandName={brandDetails.name} categoryList={categories}/>
      <div className="flex flex-col p-8 bg-spoon-grey gap-4 h-full">
        {/*console.log(brandMenu[0])*/}
        <DishCard dishInfo={brandMenu[0]}/>
        <DishCard dishInfo={brandMenu[1]}/>
        <DishCard dishInfo={brandMenu[2]}/>
        <DishCard dishInfo={brandMenu[3]}/>
        <DishCard dishInfo={brandMenu[4]}/>        
      </div>
      {
        /*brandMenu.map((item) => (
          <h3 key={item.DishID}>{item.name}</h3>
        ))*/
      }
    </main>
    </>
  )
}
