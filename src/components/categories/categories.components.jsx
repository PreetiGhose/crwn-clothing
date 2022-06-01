import './categories.scss';

const CategoryList = (props) => {
  return (
    <div className="Category-container">
      <div className="background-img">
        <h1>{props.title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryList;
