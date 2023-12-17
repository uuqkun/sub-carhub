const About = () => {
  return (
    <article className="about">
      <div className="padding-x">
        <h2 className="text-[32px] font-bold mb-10">About us</h2>
        <p className="w-[500px] text-[20px]">
          In this final project we created a project titled "Application of
          merge sort and quicksort algorithms for sorting data in web-based
          applications and comparison with JavaScript sorting built-in
          algorithms" by displaying data in the catalog in an unordered manner.
          <br />
          <br />
          So a car catalog platform is also needed that can make it easier for
          users to use. This platform aims to develop a car catalog website that
          not only displays various car models, but also various attributes,
          such as brand, type, year, price, and so on. To make it easier for
          users to find the desired car, car data needs to be sorted based on
          certain attributes.
        </p>
      </div>

      <div>
        <h4 className="text-[24px] font-semibold mt-5 mb-10">App Features</h4>
        <ul className="about__feature">
            <li className="about__features">✅ Search vehicle by manufacturers</li>
            <li className="about__features">✅ Search vehicle by models</li>
            <li className="about__features">✅ Filter by fuel types</li>
            <li className="about__features">✅ Filter by Released year</li>
            <li className="about__features">✅ Sort by rent fee per day</li>
        </ul>
      </div>
    </article>
  );
};

export default About;
