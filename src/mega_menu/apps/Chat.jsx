import ChatBoldy from "../../components/chat/ChatBoldy";
import ChatList from "../../components/chat/ChatList";

function Chat() {
  return (
    <>
      {/* chat apps */}
      <section className="flex flex-col lg:grid grid-cols-12 bg-secondary container text-white gap-8 pb-8">

        {/* left side  */}
        <div className="col-span-3  bg-primary rounded">
          <ChatList></ChatList>
        </div>

        {/* right site  */}
        <div className="col-span-9  bg-primary rounded ">
          <ChatBoldy></ChatBoldy>
        </div>
      </section>
    </>
  );
}

export default Chat;
