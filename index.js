// TODO 1:
// Create a Recipe component.

function Recipe()
{

    return(

        <div className="container">
           <div className="row">
   <div className="col-4">

            {/* Card 1 */}
<div className="card" style={{width: "18rem;"}}>
  <img className="card-img-top" src="image1.jpg" alt="CHICKEN NOODLES SOUP"/>
  <div className="card-body">
    <div className="card-body">
  <h5 className="card-title">CHICKEN NOODLE SOUP</h5>

  <ul className="list-group list-group-flush"></ul>
     <ul className="list-group list-group-flush">
    <li className="list-group-item">2 Tablespoons extra virgin olive oil</li>
    <li className="list-group-item">1 yellow onion</li>
    <li className="list-group-item">2 medium carrots</li>
    <li className="list-group-item">2 stalk celery</li>
    <li className="list-group-item">8 cups chiken broth</li>
    <li className="list-group-item">1(16 oz) package wide egg noodles</li>
    <li className="list-group-item">1 cup cooked chiken</li>
  </ul>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

</div></div>



<div className="col-4">

<div className="card" style={{width: "18rem;"}}>
  <img className="card-img-top" src="image2.jpg" alt="CURRIED EGG SALAD"/>
  <div className="card-body">
    <div className="card-body">
  <h5 className="card-title">CURRIED EGG SALAD</h5>

  <ul className="list-group list-group-flush"></ul>
     <ul className="list-group list-group-flush">
    <li className="list-group-item">12 hard boiled eggs</li>
    <li className="list-group-item">1/2</li>
    <li className="list-group-item">2 medium carrots</li>
    <li className="list-group-item">2 stalk celery</li>
    <li className="list-group-item">8 cups chiken broth</li>
    <li className="list-group-item">1(16 oz) package wide egg noodles</li>
    <li className="list-group-item">1 cup cooked chiken</li>
  </ul>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</div>



<div className="col-4">

            {/* Card 3 */}
<div className="card" style={{width: "18rem;"}}>
  <img className="card-img-top" src="image3.jpg" alt="OAT CLUSTERS"/>
  <div className="card-body">
    <div className="card-body">
  <h5 className="card-title">OAT CLUSTERS</h5>

  <ul className="list-group list-group-flush"></ul>
     <ul className="list-group list-group-flush">
    <li className="list-group-item">12 hard boiled eggs</li>
    <li className="list-group-item">1/2</li>
    <li className="list-group-item">2 medium carrots</li>
    <li className="list-group-item">2 stalk celery</li>
    <li className="list-group-item">8 cups chiken broth</li>
    <li className="list-group-item">1(16 oz) package wide egg noodles</li>
    <li className="list-group-item">1 cup cooked chiken</li>
  </ul>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

</div></div></div></div>

    );

  }

// TODO 2:
// Create the React Root

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

// TODO 3:
// Render the Recipe component.

root.render(
    <Recipe />
);
