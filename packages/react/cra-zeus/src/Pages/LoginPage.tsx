import Login from "../Components/Login";

const LoginPage = () => {
  return (
    // bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHMtLZL2cbnpSG7gYl-fX3xXpvsqc94wI20FNVleA5w&s)]
    <div className="h-[100vh] flex items-center justify-center p-10">
      {/* login */}
      <Login />
      <div className="h-full w-full bg-gradient-to-r from-myBlue to-myPink opacity-70 absolute top-0 -z-10" />
      <div className="h-full w-full absolute bg-pattern -z-20 top-0" />
    </div>
  );
};

export default LoginPage;
