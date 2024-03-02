import React from 'react'

const Search = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-5">Search for Restaurants and Food</h1>
            <form className="row g-3 mt-5">
                <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputCuisine" className="form-label">Cuisine</label>
                    <select className="form-select" id="inputCuisine">
                        <option value="rolls">Rolls</option>
                        <option value="northindian">North Indian</option>
                        <option value="tea">Tea</option>
                        <option value="cake">Cake</option>
                        <option value="dessert">Dessert</option>
                        <option value="sandwich">Sandwich</option>
                        <option value="beverages">Beverages</option>
                    </select>
                </div>
                <div className="col-md-4 py-4">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search
