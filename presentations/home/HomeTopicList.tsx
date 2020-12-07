import _ from "lodash";

export default function HomeTopicList() {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-x-0 gap-y-28">
      {_.range(6).map((i) => (
        <div key={i} className="flex justify-center">
          <div className="flex flex-col" data-aos="fade-up">
            <h2 className="text-xl mb-2 text-center">Quản lý cửa hàng</h2>
            <img
              className="object-fill w-full"
              src="/assets/images/gozo-logo.png"
              alt="abcd"
            />
            <ul>
              <li>Số hoá các thông tin của hàng</li>
              <li>Quản lý nhiều thông tin hơn</li>
              <li>Quản lý từ mọi nơi</li>
              <li>Quản lý bằng mọi thiết bị</li>
              <li>Chia sẽ dữ liệu thuận tiện</li>
            </ul>
            <a href="#">Chi tiết</a>
          </div>
        </div>
      ))}
    </div>
  );
}
