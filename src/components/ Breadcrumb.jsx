const Breadcrumb = () => {
  return (
    <section className="section">
      <div className="container">
        <nav className="breadcrumb is-centered has-text-weight-semibold">
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li className="is-active">
              <a href="#" aria-current="page">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
