export function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
        {/* <ShoppingList /> */}
      </>
    );
      
}

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
export function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }