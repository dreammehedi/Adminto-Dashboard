import Error from "../../../pages/error/Error";

function Error500() {
  return (
    <>
      {/* error 500 page */}
      <Error
        code={500}
        title={"Internal Server Error!"}
        message={"Why not try refreshing your page? or you can contact Support"}
      ></Error>
    </>
  );
}

export default Error500;
