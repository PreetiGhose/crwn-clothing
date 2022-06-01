import CategoryList from '../categories/categories.components';

const Directory = (props) => {
  return (
    <div className="categories-container">
      {props.categoryDir.map((c) => {
        console.log(c);
        return <CategoryList key={c.id} categories={c} />;
      })}
    </div>
  );
};
export default Directory;
