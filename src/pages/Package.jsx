import PackageItem from "../components/PackageItem";

export default function Package({ data }) {
  // good
  const Packages = data.map((item) => (
    <PackageItem key={item.id} item={item} />
  ));

  return (
    <div className="package_page">
      <div className="container">
        <h2 className="heading">Hello! Carl Johan De Geer</h2>
        {/* Semantics -1 use <p> for true paragraphs with text using 2 or more sentences */}
        {/* In this case this can be a span with a className "subtitle" (because is a continuation of the title, thus, is NOT an H2) */}
        <p className="heading_info">Here are your packages</p>
        <section className="package_list">{Packages}</section>
      </div>
    </div>
  );
}
