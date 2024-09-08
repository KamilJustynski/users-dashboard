export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10 pb-20 justify-center items-center bg-[#F0F6FF] w-full px-10 ">
      <h1 className="font-bold text-7xl">
        Welcome to <span className="text-[#446389]">Finder</span>
      </h1>
      <p className="text-center max-w-[600px] leading-10 text-xl">
        We're glad to have you with us. In this dashboard, you will find all the
        necessary information about your users, such as names, surnames, phone
        numbers and email addresses. Our goal is to make it easy for you to
        access and manage your data in a simple and intuitive way.
      </p>
    </div>
  );
};
