import img1 from '../assets/Chatbot.png'
import img2 from '../assets/Vector.png'

const Navbar = () => {
  return (
    <nav className="bg-[#EFF3FD] w-[360px] h-[80px] flex rounded-t-[20px] py-[10px] px-[20px]">
      <div className="w-[191px] h-[60px] mr-[67px] flex">
        <div className="relative">
          <img src={img1} alt="chatbot-avatar" />
          <div className="h-[8px] w-[8px] bg-[#3FE225] absolute top-[40px] left-[38.5px] rounded-md"></div>
        </div>

        <div className="ml-[10px]">
          <p className="text-[#4C82EF] flex items-center text-[18px] font-[600]">
            Timpu
            <span className="ml-[10px]">
              <img src={img2} alt="vector-img" />
            </span>
          </p>
          <p className="text-[#4C82EF] text-[15px] font-[500]">
            Chat assistant
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center mt-[25px]">
          <div className="h-[8px] w-[8px] bg-[#3FE225] rounded-md mr-[5px]"></div>
          <p className="text-[#4C82EF] text-[15px] font-[500]">Online</p>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
