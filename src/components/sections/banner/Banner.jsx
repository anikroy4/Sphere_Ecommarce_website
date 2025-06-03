import React from 'react'

const Banner = () => {
  const width = "max-w-[1405px]";
  const className = width
    ? "max-w-[1405px] ml-[200px] mx-auto"
    : "max-w-[1405px] ml-25 mx-auto";

  return (
    <section className='  bg-[#F3F4F6]'>
      <div className='max-w-[1440px] mx-auto'>
      <div className={className}>
        <img src="images/bannerimage.png" alt="bannerimage" />
      </div>
    </div>
    </section>
  )
}

export default Banner