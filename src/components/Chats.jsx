import right from '../assets/right.png'
import bag from '../assets/bag.png'
import img2 from '../assets/Vector.png'
import img3 from '../assets/Vector2.png'
import sliders from '../assets/sliders.png'
import img4 from '../assets/check-square.png'
import img5 from '../assets/check-square-2.png'

const Chats = () => {
  return (
    <div className="pt-[50px] px-[10px] pb-[10px] w-[350px] h-[640px]">
      {/* Message 1 */}
      <div className="w-[330px] h-[100px]">
        <div className="w-[250px] h-[80px] bg-[linear-gradient(100.24deg,_#E6EEFF_13.91%,_#FFFFFF_116.73%)] py-[10px] px-[15px] rounded-[15px]">
          <p className="text-[13px] font-[400]">
            Hi Sam! I am your personal shopping assistant , how can i help you
            today ?
          </p>
        </div>
        <p className="mx-[10px] text-[10px] font-[400] mt-[5px]">4:45 PM</p>
      </div>

      {/* Message 2 */}
      <div className="w-[330px] h-[80px] mt-[20px]">
        <div className="w-[213px] h-[60px] bg-[#DCF7C5] py-[10px] px-[15px] ml-[117px] rounded-[15px]">
          <p className="text-[13px] font-[400]">
            I am looking for a hand bag, with long strap .
          </p>
        </div>
        <p className="text-right text-[10px] font-[400] mt-[5px] mx-[10px]">
          4:46 PM
        </p>
      </div>

      {/* Tags */}
      <div className="w-[330px] h-[60px] mt-[20px]">
        <p className="text-[#949494] text-[13px] font-[400]">
          Popular tags for handbag
        </p>

        <div className="flex items-center">
          <div className="mt-[10px] text-nowrap overflow-x-clip text-[13px] font-[500]">
            <a
              href=""
              className="w-[63px] h-[30px] py-[5px] px-[10px] border-[1px]  border-[#4C82EF] rounded-[5px] text-[#4C82EF] bg-[#F2F7FF] "
            >
              Clutch
            </a>
            <a
              href=""
              className="w-[63px] h-[30px] py-[5px] px-[10px] border-[1px] border-[#4C82EF] rounded-[5px] text-[#4C82EF] bg-[#F2F7FF] ml-[10px] overflow-x-hidden"
            >
              Fabric lining
            </a>
            <a
              href=""
              className="w-[63px] h-[30px] py-[5px] px-[10px] border-[1px] border-[#4C82EF] rounded-[5px] text-[#4C82EF] bg-[#F2F7FF] ml-[10px]"
            >
              Baggit
            </a>
            <a
              href=""
              className="w-[63px] h-[30px] py-[5px] px-[10px] border-[1px] border-[#4C82EF] rounded-[5px] text-[#4C82EF] bg-[#F2F7FF] ml-[10px] "
            >
              Multi Compartment
            </a>
          </div>
          <div className="h-[24px] w-[24px]">
            <img src={right} alt="right-arrow" className="mt-[10px] ml-[7px]" />
          </div>
        </div>
      </div>

      {/* Product and filters */}
      <div className="w-[330px] h-[259px] mt-[20px]">
        <div className="w-[330px] h-[161px]">
          <div className="w-[250px] h-[141px] p-[10px] rounded-[20px] bg-[linear-gradient(114.92deg,_#E6EEFF_34.14%,_#FAFCFF_105.26%)]">
            <div className="w-[230px] h-[71px] py-[10px] px-[15px] bg-white rounded-[10px] flex">
              <img src={bag} alt="bag" />

              <div className="ml-[11px]">
                <div className="flex items-center">
                  <p className="text-[13px] font-[500]">Bags on Timpu</p>
                  <span className="ml-[4px]">
                    <img src={img2} alt="vector-img" />
                  </span>
                </div>

                <div className="mt-[7px] flex justify-between items-center">
                  <p className="text-[#949494] text-[12px] font-[400]">
                    1123 products
                  </p>
                  <img src={img3} alt="right" />
                </div>
              </div>
            </div>

            <p className="w-[230px] h-[40px] my-[10px] text-[13px] font-[400]">
              Or set filter and help us choose the best bag for you.
            </p>
          </div>
          <p className="mx-[10px] text-[#333333] text-[10px] font-[400] mt-[5px]">
            4:48 PM
          </p>
        </div>

        {/* Filters */}

        <div className="mt-[10px] mb-[31px]">
          <div className="flex justify-between">
            <p className="text-[#949494] text-[13px] font-[400]">
              Select filters
            </p>
            <div className="flex">
              <img src={sliders} alt="sliders" />
              <span className="text-[#666666] text-[13px] font-[400]">
                Filter
              </span>
            </div>
          </div>

          <div className="mt-[10px] flex gap-[10px] flex-wrap text-[13px] font-[400]">
            <div className="py-[2px] px-[10px] rounded-[5px] bg-[#F6F9FF] border-[1px] border-[#4C82EF] flex items-center">
              <div className="text-[#4C82EF]">
                <span>Strap</span>
                <span className="ml-[5px]">-</span>
                <span className="ml-[5px] font-[500]">Long</span>
              </div>
              <div className="ml-[5px] mt-[1px]">
                <img src={img4} alt="check-square" />
              </div>
            </div>

            <div className="py-[2px] px-[10px] rounded-[5px] bg-[#F4F4F4] flex items-center">
              <div className="text-[#737373]">
                <span>Colour</span>
              </div>
              <div className="ml-[5px] mt-[.7px]">
                <img src={img5} alt="check-square" />
              </div>
            </div>

            <div className="py-[2px] px-[10px] rounded-[5px] bg-[#F4F4F4] flex items-center">
              <div className="text-[#737373]">
                <span>Size</span>
              </div>
              <div className="ml-[5px] mt-[.5px]">
                <img src={img5} alt="check-square" />
              </div>
            </div>

            <div className="py-[2px] px-[10px] rounded-[5px] bg-[#F4F4F4] flex items-center">
              <div className="text-[#737373]">
                <span>Brand</span>
              </div>
              <div className="ml-[5px] mt-[1px]">
                <img src={img5} alt="check-square" />
              </div>
            </div>

            <div className="py-[2px] px-[10px] rounded-[5px] bg-[#F4F4F4] flex items-center">
              <div className="text-[#737373]">
                <span>Material</span>
              </div>
              <div className="ml-[5px] mt-[1px]">
                <img src={img5} alt="check-square" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Chats
