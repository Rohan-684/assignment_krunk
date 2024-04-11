import Chats from './Chats'
import Footer from './Footer'
import Navbar from './Navbar'

const ChatAssistant = () => {
  return (
    <div className="w-[360px] h-[800px] [box-shadow:0px_0px_0px_7px_white] bg-white rounded-[20px] border-b-[7px] border-white">
      <Navbar />
      <Chats />
      <Footer />
    </div>
  )
}
export default ChatAssistant
