import Link from "next/link"
import { BiMessageDetail } from "react-icons/bi"
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className="mt-16">
            <div className="container mx-auto px-4">
                <Link href="/" className="font-black text-tertiary-dark">
                    IT MOTEL
                </Link>
                <h4 className="font-semibold text-[40px] py-6">Liên hệ</h4>


                <div className="flex flex-wrap gap-16 items-center justify-between">
                    <div className="flex-1">
                        <p>280 An Dương Vương</p>
                        <div className="flex items-center py-4">
                            <BsFillSendFill />
                            <p className="ml-2">P4</p>

                        </div>
                        <div className="flex items-center py-4">
                            <BsTelephoneOutbound />
                            <p className="ml-2">0933102602</p>

                        </div>
                        <div className="flex items-center pt-4">
                            <BiMessageDetail />
                            <p className="ml-2">itmotel@gmail.com</p>

                        </div>
                    </div>

                    <div className="flex-1 md:text-right">

                        <p className="pb-4">Về chúng tôi</p>
                        <p className="pb-4">Liên hệ</p>
                        <p className="pb-4">Chính sách của chúng tôi</p>
                        <p className="pb-4">Điều khoản sử dụng</p>
                        <p>Hỗ trợ khách hàng</p>
                    </div>
                    {/* <div className="flex-1 md:text-right">
                       <p className="pb-4">Dining experience</p> 
                       <p className="pb-4">Wellness</p>
                       <p className="pb-4">Fitness</p>
                       <p className="pb-4">Sports</p>
                       <p>Events</p>
                    </div> */}
                </div>
            </div>
            <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"/>
        </footer>
    )
}

export default Footer
