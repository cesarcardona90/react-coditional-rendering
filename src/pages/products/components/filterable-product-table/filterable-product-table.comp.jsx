import React from 'react';
import ProductTable from '../product-table/product-table.comp';
import './filterable-product-table.style.css';

const FilterableProductTable = () => {
    return (
        
        <div className="filterable-product-tabe-container"> University of Manizales-Subject
            <ProductTable/>
            
        </div>
        
    );
    
}

export default FilterableProductTable;