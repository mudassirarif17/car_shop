import Image from "next/image"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__title font-bold text-3xl px-6">
            Find book, rent a car-quick and super easy!
        </h1>
        <p className="hero__subtitle text-lg px-6 text-gray-600">Stremine your car rental experience with our effortless booking process.</p>
      </div>
      <div className="hero__right"></div>
    </div>
  )
}

export default Hero
