import React from 'react';
import SubjectCategory from '../subject-category/subject-category.comp';
import Information from '../product-row/information.comp';
import './product-table.style.css';

const ProductTable = () => {

   
        
    
    return (
        <div className="product-table-container">
            <SubjectCategory categoryName="Programming 3"/>
            <table>
                <thead>
                    <tr>
                        <th>
                           <th className="namerow">Student  </th> 
                           <th className="namerow">Score</th> 
                         
                           
                        </th>
                    </tr>
                </thead>
            </table>
            <Information information={{
                name:"Cesar Cardona",
                grade: 4 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Diego Toro",
                grade: 2.9 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Maria Antonia",
                grade: 1 ,
                gender: 15,

            }}/>
            <Information information={{
                name:"cristian Serna",
                grade: 3.0 ,
                gender: 15,
            
            }}/>
            <Information information={{
                name:"Laura Loriga",
                grade: 5 ,
                gender: 15,

                
            }}/>
            
            <SubjectCategory categoryName="Networks 2"/>
            <table>
              
                <thead>
                    <tr>
                        <th>
                           <th className="namerow">Student  </th> 
                           <th className="namerow">Score</th> 
                           
                           
                        </th>
                    </tr>
                </thead>
            </table>
            <Information information={{
                name:"Cesar Cardona",
                grade: 5 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Maria Antonia",
                grade: 2.9 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Diego Toro",
                grade: 5 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"cristian Serna",
                grade: 4.1 ,
                gender: 15,
            
            }}/>
            <Information information={{
                name:"Laura Loriga",
                grade: 3.7 ,
                gender: 15,
            }}/>
            <SubjectCategory categoryName="operating systems"/>
            <table>
              
                <thead>
                    <tr>
                        <th>
                           <th className="namerow">Student  </th> 
                           <th className="namerow">Score</th> 
                           
                           
                        </th>
                    </tr>
                </thead>
            </table>
            <Information information={{
                name:"Cesar Cardona",
                grade: 3.1 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Maria Antonia",
                grade: 2 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Diego Toro",
                grade: 3.2 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"cristian Serna",
                grade: 4.6 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Laura Loriga",
                grade: 1 ,
                gender: 15,
                
            }}/>
              
        </div> 
        
    );
    
}

export default ProductTable;