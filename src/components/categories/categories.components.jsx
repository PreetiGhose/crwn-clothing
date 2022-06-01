import { useEffect } from 'react';
import './categories.scss';

const CategoryList = (props) => {
  useEffect(() => {
    console.log(typeof props.categories.imageUrl);
  }, []);

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.categories.imageUrl})` }}
      />
      <div className="category-body-container">
        <h1>{props.categories.title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryList;
