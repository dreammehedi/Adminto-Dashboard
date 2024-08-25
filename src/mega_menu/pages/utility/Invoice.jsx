function Invoice() {
  return (
    <>
      {/* invoice page */}
      <section className="bg-secondary container text-gray-200 py-6">
        <div className="bg-primary rounded shadow-lg  mx-auto p-8 *:flex *:flex-col *:gap-4 md:*:flex-row *:justify-between">
          <div className="text-2xl font-semibold border-b border-gray-700 pb-6">
            <h1 className="">Adminto</h1>
            <h1 className="text-base">
              Invoice # <br></br>
              2016-04-23654789
            </h1>
          </div>
          <div className=" text-sm text-gray-400 my-12">
            <div>
              <p className="font-semibold">Twitter, Inc.</p>
              <p>795 Folsom Ave, Suite 600</p>
              <p>San Francisco, CA 94107</p>
            </div>
            <div className="flex flex-col gap-3">
              <h1>
                <span className="font-semibold">Order Date:</span> Jan 17, 2016
              </h1>
              <h1>
                <span className="font-semibold">Order Status:</span> Pending
              </h1>
              <h1>
                {" "}
                <span className="font-semibold">Order ID:</span> #123456
              </h1>
            </div>
          </div>
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
          <div className="border-b border-gray-700 pb-8">
            <div className="md:w-1/2 my-12 text-xs text-gray-400">
              <h1 className="font-semibold mb-2">PAYMENT TERMS AND POLICIES</h1>
              <p className="font-light">
                All accounts are to be paid within 7 days from receipt of
                invoice. To be paid by cheque or credit card or direct payment
                online. If account is not paid within 7 days the credits details
                supplied as confirmation of work undertaken will be charged the
                agreed quoted fee noted above.
              </p>
            </div>
            <div className="text-sm ">
              <div className="flex flex-col gap-3 my-4 text-gray-400 border-b border-gray-600 pb-6">
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
              <div className="font-semibold text-2xl">USD 1290</div>
            </div>
          </div>
          <div className="mt-6">
            <div></div>
            <div className="">
              <button className="p-2 text-sm mr-2 text-black rounded bg-white">
                print
              </button>
              <button className="bg-blue-400 text-white px-3 py-2 text-sm font-semibold rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Invoice;
