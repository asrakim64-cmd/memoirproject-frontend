export default function Subscription() {
  return (
    <section className="flex justify-center items-center py-20">
      <div className="w-[650px] bg-white border border-[#D8CEC8] rounded-lg p-10">

        <h1 className="text-[25px] font-bold text-center mb-10 text-black">
          Complete Your Subscription
        </h1>

        <div className="flex justify-between items-center mb-2">
          <h2 className="font-serif text-[36px] text-[#2C2C2C] leading-[44px] mb-3">
            Payment
          </h2>

          <div className="flex gap-2">
            <img
              src="/visa.png"
              alt="Visa"
              className="w-10 h-10"
            />

            <img
              src="/masterCard.png"
              alt="Mastercard"
              className="w-10 h-10"
            />
          </div>
        </div>

        <p className="text-[18px] font-normal text-black mb-5">
          All transactions are secure and encrypted
        </p>

        <input
          type="text"
          placeholder="Card number"
          className="w-full h-14 border border-black rounded-lg px-5 mb-5 text-[18px] text-black placeholder:text-gray-500 outline-none"
        />

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Expiration date (MM/YY)"
            className="flex-1 h-14 border border-black rounded-lg px-4 text-[18px] text-black placeholder:text-gray-500 outline-none"
          />

          <input
            type="text"
            placeholder="Security code"
            className="w-[140px] h-14 border border-black rounded-lg px-4 text-[18px] text-black placeholder:text-gray-500 outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Name on card"
          className="w-full h-14 border border-black rounded-lg px-5 mb-8 text-[18px] text-black placeholder:text-gray-500 outline-none"
        />

        <div className="flex justify-between ">
          <button
            className="bg-[#a7cdbd] text-white text-[28px] font-bold w-full py-4 rounded-lg hover:bg-[#a7cdbd] transition"
          >
            Pay Now
          </button>
        </div>

      </div>
    </section>
  );
}