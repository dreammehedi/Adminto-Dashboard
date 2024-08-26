import { IoMdPrint } from "react-icons/io";

function Invoice() {
  return (
    <>
      {/* invoice page */}
      <section className="bg-secondary pb-6">
        <div className="container ">
          <div className="bg-primary rounded-md shadow-md p-4 md:p-6 *:flex *:flex-col *:gap-4 md:*:flex-row *:justify-between">
            {/* invoice top */}

            <div className="border-b border-gray-700 pb-4 ">
              <h1 className="text-white text-xl md:text-2xl font-semibold">
                Adminto
              </h1>
              <h1 className="text-base md:text-lg text-white">
                Invoice # <br></br>
                2024-08-23654789
              </h1>
            </div>

            {/* invoice top bottom detailes */}
            <div className="text-sm text-gray-400 my-12">
              <div>
                <p className="font-semibold">Facebook</p>
                <p>Mirzapur, Tangail</p>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className="flex flex-col gap-3">
                <h1>
                  <span className="font-semibold">Order Date:</span> Auguest 26,
                  2024
                </h1>
                <h1>
                  <span className="font-semibold">Order Status:</span> Pending
                </h1>
                <h1>
                  <span className="font-semibold">Order ID:</span> #123456
                </h1>
              </div>
            </div>

            {/* invoice table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-gray-400">
                <thead>
                  <tr className=" text-center border-b border-gray-700 *:px-3 *:py-6 ">
                    <th>#</th>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Unit Cost</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody className="text-center font-light *:border-b *:border-gray-700">
                  <tr className="*:py-3 *:px-6">
                    <td>1</td>
                    <td>LCD</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>1</td>
                    <td>$380</td>
                    <td>$380</td>
                  </tr>
                  <tr className="*:py-3 *:px-6">
                    <td>2</td>
                    <td>Mobile</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>5</td>
                    <td>$50</td>
                    <td>$250</td>
                  </tr>
                  <tr className="*:py-3 *:px-6">
                    <td>3</td>
                    <td>LED</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>2</td>
                    <td>$500</td>
                    <td>$1000</td>
                  </tr>
                  <tr className="*:py-3 *:px-6">
                    <td>4</td>
                    <td>LCD</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>3</td>
                    <td>$300</td>
                    <td>$900</td>
                  </tr>
                  <tr className="*:py-3 *:px-6">
                    <td>5</td>
                    <td>Mobile</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>5</td>
                    <td>$80</td>
                    <td>$400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* invoice sub total  */}
            <div className="border-b border-gray-700 pb-8">
              <div className="md:w-1/2 my-12 text-xs">
                <h1 className="font-semibold mb-2 text-white">
                  PAYMENT TERMS AND POLICIES
                </h1>
                <p className="text-text-color leading-[23px]">
                  All accounts are to be paid within 7 days from receipt of
                  invoice. To be paid by cheque or credit card or direct payment
                  online. If account is not paid within 7 days the credits
                  details supplied as confirmation of work undertaken will be
                  charged the agreed quoted fee noted above.
                </p>
              </div>
              <div className="text-sm ">
                <div className="flex flex-col gap-3 my-4 text-text-color border-b border-gray-600 pb-6">
                  <h1 className="font-semibold text-[15px]">
                    Sub-total : <span>2390</span>
                  </h1>
                  <h1>
                    Discount : <span>12.9%</span>
                  </h1>
                  <h1>
                    VAT : <span>12.9%</span>
                  </h1>
                </div>
                <div className="font-semibold text-xl md:text-2xl text-white">
                  USD 1290
                </div>
              </div>
            </div>

            {/* invoice footer */}
            <div className="mt-6 ">
              <div></div>
              <div className="flex place-items-center gap-3">
                <button className="px-3 py-2 mr-2 text-black rounded bg-white">
                  <IoMdPrint className="text-lg"></IoMdPrint>
                </button>
                <button className="bg-blue-400 text-white px-3 py-2 text-sm font-semibold rounded my-transition hover:bg-blue-400/50">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Invoice;
