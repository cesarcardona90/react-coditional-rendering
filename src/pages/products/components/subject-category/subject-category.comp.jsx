import React from 'react';
import './subjectcategory.style.css';
const SubjectCategory = (props) => {
    return (
        <div className="subject-category-container">
           {props.categoryName}
           
        </div> 

);
    
    
   
}

export default SubjectCategory;