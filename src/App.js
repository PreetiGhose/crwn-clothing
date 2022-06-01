import React from 'react';
import CategoryList from './components/categories/categories.components';

const App = () => {
  const category = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Shoes'
    },
    {
      id: 4,
      title: 'Men'
    },
    {
      id: 5,
      title: 'Women'
    }
  ];
  console.log(category);
  return (
    <div>
      <div className="Categories-container">
        {category.map((category) => {
          return <CategoryList key={category.id} title={category.title} />;
        })}
      </div>
    </div>
  );
};

export default App;
