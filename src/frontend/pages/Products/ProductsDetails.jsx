export default function ProductsDetails() {
  return (
    <section className="main-container">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 ">
        <div>
          <figure className="w-[330px] h-[330px]">
            <img
              src="/public/images/products/1.jpg"
              alt=""
              className="w-full"
            />
          </figure>
        </div>
        <div className="flex flex-wrap flex-col">
          <div
            className="  rounded-xl flex items-center  gap-8"
            style={{
              backgroundImage: "url(/public/images/products/flashSale.png)",
              backgroundSize: "100% 100%",
              height: "29px",
              backgroundPosition: "cover",
              margin: "8px",
            }}
          >
            <div className="crazy-deal-details flex items-center justify-between">
              <div>Ends in 06:37:25</div>
              <div
                className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                  style={{ width: "45%" }}
                />
              </div>
            </div>
          </div>
          <div>Products Title</div>
          <div>
            <div>redding | Q&A</div>
            <div>share | wishlist</div>
          </div>
          <div>Brand: egelent mart</div>
          <div>
            <div>price | discount price</div>
            <div>Promotion</div>
          </div>
          <div>Color</div>
          <div>Cart btn</div>
        </div>
        <div>Products Details</div>
      </div>
    </section>
  );
}
