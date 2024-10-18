import Bg from '../../../public/image/bg.jpg'

const Hero = () => {
    return (
        <div>
            <div className="relative">
            <img src={Bg} alt="" className='w-[100%] h-[90vh] object-cover' />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to STEADfast IT</h1>
            <p className="text-2xl mb-6">Your Trusted It Partner</p>
            <button className="px-4 py-2 bg-black text-white hover:bg-white hover:text-black" id="openModalBtn">Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default Hero;