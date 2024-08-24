import Logo from "./Logo";

function Header() {
  return (
    <>
      {/* header */}
      <header className="bg-header-bg">
        <div className="container flex justify-between items-center gap-4 py-4 md:py-5">
          {/* logo */}
          <Logo></Logo>

          {/* search form */}
          <form>
            <input
              className="bg-primary text-text-color rounded-full px-4 py-2"
              name="searchDashboard"
              type="text"
              placeholder="Search..."
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </header>
    </>
  );
}

export default Header;
