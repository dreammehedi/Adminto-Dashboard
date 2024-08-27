const dashboardUserData = [
  {
    image: "https://i.ibb.co/WsXJWvN/favicon.png",
    name: "Md. Mehedi Hassan",
    email: "dreammehedihasssan@gmail.com",
    role: "Admin",
    color: "#28a745",
  },
  {
    image: "https://i.ibb.co/n7NVcL5/cta-1.png",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "User",
    color: "#007bff",
  },
  {
    image: "https://i.ibb.co/61K8wXk/ahidur-rahman.jpg",
    name: "Ahidur Rahaman",
    email: "jane.smith@example.com",
    role: "Moderator",
    color: "#ffc107",
  },
  {
    image: "https://i.ibb.co/WsXJWvN/favicon.png",
    name: "Mehedi Hassan Miraj",
    email: "designermehedimb@gmail.com",
    role: "User",
    color: "#007bff",
  },
];

function DashboardUser() {
  return (
    <>
      {/* dashboard user info */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {/* user info */}
        {dashboardUserData.map((userInfoItem, ind) => {
          const { name, email, role, image, color } = userInfoItem;
          return (
            <div
              key={ind}
              className="p-4 md:p-6 rounded-md bg-primary flex flex-col  text-center justify-center lg:justify-start lg:items-start items-center gap-4 md:gap-6"
            >
              {/* image */}
              <img
                className="size-[70px] rounded-full object-cover"
                src={image}
                alt=""
              />

              {/* content */}
              <div className="flex flex-col justify-center lg:justify-normal text-center space-y-2 md:text-left break-words text-wrap">
                <h5 className="text-white md:text-lg">{name}</h5>
                <small className="text-text-color text-xs break-words text-wrap lg:max-w-[150px]">
                  {email}
                </small>
                <span
                  style={{ color: color }}
                  className="text-xs font-semibold uppercase"
                >
                  {role}
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default DashboardUser;
