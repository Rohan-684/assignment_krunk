import img from '../assets/paperclip.png'
import img1 from '../assets/VectorFooter.png'
import logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <div className="w-[360px] p-[5px] bg-[linear-gradient(100.27deg,_#EFF3FD_33.17%,_rgba(239,_243,_253,_0)_122.24%)] border-[2px] border-[#FFFFFF] rounded-b-[20px]">
      <div className="w-[340px] h-[40px] flex">
        <div className="border-[1px] border-[#E3ECFF] w-[265px] h-[40px] rounded-[10px] bg-white pl-[20px] pr-[10px] flex justify-between items-center">
          <p className="text-[#949494] text-[13px] font-[400]">
            Type your message
          </p>
          <div>
            <img src={img} alt="paper-clip" />
          </div>
        </div>

        <div className="bg-[#4C82EF] w-[70px] h-[40px] py-[8px] px-[40px] rounded-[10px] ml-[5px] flex items-center justify-center">
          <img src={img1} alt="vector-right-arrow" className="max-w-[15px]" />
        </div>
      </div>

      <div className="w-[340px] h-[20px] flex items-center justify-center mt-[10px] gap-[5px] text-[13px] font-[400] ">
        <span className="text-[#B1B1B1] ">Powered by </span>
        <span className="text-[#7A7F8C] font-[600]">Krunk.ai</span>
        <span>
          <img src={logo} alt="logo" />
        </span>
      </div>
    </div>
  )
}
export default Footer
