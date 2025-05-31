import React from 'react'
import Banner from '../../components/sections/banner/Banner'
import Provider from '../../components/sections/provide/Provider' 
import Search from '../../components/searchpart/Search'
// import NewProduct from '../../components/sections/newproduct/NewProduct'


const Home = () => {
  return (
    <>
      <Banner />
      <Provider />
      {/* <NewProduct /> */}
      <Search />
    </>
  )
}

export default Home