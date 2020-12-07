import _ from "lodash";

export default function HomeTopicList() {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32">
      {_.range(6).map((i) => (
        <div key={i} className="p-5 flex flex-col shadow" data-aos="zoom-in">
          <h2 className="text-xl mb-2 text-center font-bold">
            Quản lý cửa hàng
          </h2>
          <div className="grid grid-cols-3 gap-x-10">
            <div>
              <img
                className="object-fill w-full"
                src="/assets/images/mr-square_icon.png"
                alt="abcd"
              />
            </div>
            <div className="col-span-2">
              <ul>
                <li>Số hoá các thông tin của hàng</li>
                <li>Quản lý nhiều thông tin hơn</li>
                <li>Quản lý từ mọi nơi</li>
                <li>Quản lý bằng mọi thiết bị</li>
                <li>Chia sẽ dữ liệu thuận tiện</li>
              </ul>
            </div>
          </div>
          <a className="mt-4 px-2 underline text-blue-400 font-bold" href="#">
            Chi tiết...
          </a>
        </div>
      ))}
    </div>
  );
}
