import PackageItem from "../components/PackageItem";

export default function Package({ data }) {
  const Packages = data.map((item) => (
    <PackageItem key={item.id} item={item} />
  ));

  return (
    <div className="package_page">
      <div className="container">
        <h2 className="heading">Hello! Carl Johan De Geer</h2>App.jsx
        <p className="heading_info">Here are your packages</p>
        <section className="package_list">{Packages}</section>
      </div>
    </div>
  );
}
