
import React from 'react'

export default function AddRecipe({formSubmit,formChangeHandler}) {
    return (
        <div className ="form">
            <form onSubmit = {formSubmit}>
                <div>
                    <label htmlFor = "name">Name</label>
                    <input id = 'name' type="text" name= "name"onChange ={formChangeHandler}  required/>
                </div>
                <div>
                    <label htmlFor = "catagory">Catagory</label>
                    <input type="text" id= "catagory" name= "catagory" onChange ={formChangeHandler}  />
                </div>
                <div>
                    <label htmlFor = "cuisine">Cuisine</label>
                    <input type="text" id= "cuisine" name= "cuisine" onChange ={formChangeHandler}  />
                </div>

                <div>
                    <label htmlFor = "preptime">Preparation time</label>
                    <input type="number" id= "preptime" name= "preptime" onChange ={formChangeHandler} />
                </div>

                <div>
                    <label htmlFor = "cooktime">Cook time</label>
                    <input type="number" id= "cooktime" name= "cooktime" onChange ={formChangeHandler}  />
                </div>
                <div>
                    <label htmlFor = "yield">Yield</label>
                    <input type="text" id= "yield" name= "yield" onChange ={formChangeHandler} />
                </div>
                <div>
                    <label htmlFor = "datepublished">Date published</label>
                    <input type="date" id= "datepublished" name= "datepublished" onChange ={formChangeHandler}  />
                </div>
                <div>
                    <label htmlFor = "description">Description</label>
                    <input type="textarea" id= "description" name= "description"  onChange ={formChangeHandler} />
                </div>
                <div>
                    <label htmlFor = "keywords">Key words</label>
                    <input type="textarea" id= "keywords" name= "keywords"  onChange ={formChangeHandler} />
                    <p>Separate multiple keywords with commas.</p>
                </div>

                <div>
                    <label htmlFor = "author">author</label>
                    <input type="ctext" id= "author" name= "author" onChange ={formChangeHandler}  />
                </div>

                <div>
                    <label htmlFor = "image"></label>
                    <input type="text" id= "image" name= "image"  />
                    <button>Add Image</button>
                </div>
                <div>
                    <label htmlFor = "ingredient">Ingredients</label>
                    <input type="text" id= "ingredient" name= "ingredient" />
                    <button>Add ingredient</button>
                </div>
                <div>
                    <p>Steps</p>
                    <label htmlFor = "stepname">Name</label>
                    <input type="text" className= "step" name= "stepname"  />
                    <label htmlFor = "text">Text</label>
                    <input type="text" className= "step" name= "text"  />
                    <label htmlFor = "stepimage">Image URL</label>
                    <input type="text" className= "step" name= "stepimage"  />
                    <button>add step</button>
                </div>                
                <input type="submit" value="Submit" id= 'submit' />
            </form>
        </div>
    )
}
