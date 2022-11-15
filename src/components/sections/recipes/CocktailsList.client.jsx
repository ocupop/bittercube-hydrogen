import { React, useState } from "react"
import Select from 'react-select'
import { fetchSync } from '@shopify/hydrogen';
import RecipeCard from "./RecipeCard.client";
import { HiSearch } from "react-icons/hi";
import { useEffect } from "react";


const recipesApi = 'https://lavish-turnip.cloudvent.net/api/recipes.json'

const options = [
  { value: 'cherry-bark-vanilla', label: 'Cherry Bark Vanilla' },
  { value: 'orange', label: 'Orange' },
  { value: 'bolivar', label: 'Bolivar' },
  { value: 'Blackstrap', label: 'Blackstrap' },
  { value: 'trinity', label: 'Trinity' },
  { value: 'root-beer', label: 'Root Beer' },
  { value: 'jamaican-1', label: 'Jamaican No. 1' },
  { value: 'jamaican-2', label: 'Jamaican No. 2' },
  { value: 'chipotlecacao', label: 'Chipotle Cacao' },
]


export default function CocktailsList(){
  const [recipes, setRecipes] = useState([])
  const allRecipes = fetchSync(recipesApi,{
    preload: false,
  }).json()
  useEffect(() => {
    if (!allRecipes) return
    setRecipes(allRecipes)
  },[])
  const [searchValue, setSearchValue] = useState("")

// filterRecipesByProduct
  const filterRecipes = ({ label }) => {
    const fiteredRecipes = allRecipes.filter(({ bitters }) => {
      return bitters.filter(({ name }) => label === name).length
    })
    setRecipes(fiteredRecipes)
  }


const customStyles = {
  menu: (provided, state) => ({
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    color: state.selectProps.menuColor,
    padding: 20,
    background: '#fff',
    postion: 'absolute',
  }),

  control: (_, { selectProps: { width }}) => ({
    width: width
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

  return(
    <>
      <div className="container flex justify-between pt-0 pb-8">
        <div className="flex items-center gap-3">
          <span className="label">Filter By:</span>

          <Select
            options={options}
            // width="250px"
            // styles={customStyles}
            placeholder={'Bitters'}
            classNamePrefix="select"
            onChange={(selected => filterRecipes(selected))}
          />

          <div className="p-2 text-sm font-semibold tracking-widest uppercase border-2 rounded-md border-gold">
            Spirit
          </div>
          {/* <div className="p-2 text-sm font-semibold tracking-widest uppercase border-2 rounded-md border-gold">
            Cocktail Style
          </div>
          <div className="p-2 text-sm font-semibold tracking-widest uppercase border-2 rounded-md border-gold">
            Bitters
          </div>
          <div className="p-2 text-sm font-semibold tracking-widest uppercase border-2 rounded-md border-gold">
            Season
          </div> */}
          {/* <Select options={options} /> */}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="search"
            placeholder="search"
            className="p-2 font-semibold tracking-widest text-right uppercase text-gold bg-paper"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
           />
          <HiSearch className="w-5 h-5 text-dark" />
        </div>
      </div>
      <hr />
      <div className="container grid grid-cols-3 gap-6">

        {recipes &&
          // .filter(recipe => recipe.name.match(new RegExp(searchValue, "i")))

          recipes.map(recipe => {
            return (
               <RecipeCard key={recipe.slug} recipe={recipe} />
            )
          })
        }
        {recipes.length === 0 && (
          <p>no cocktails</p>
        )}
      </div>
    </>
  )

}