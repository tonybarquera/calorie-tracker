import { ChangeEvent, useState } from "react";
import { categories } from "../data/categories";
import type { Activity } from "../types";

function Form() {
  const [ activity, setActivity ] = useState<Activity>({
    category: '1',
    name: '',
    calories: 0
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setActivity({
      ...activity,
      [e.target.id]: e.target.id === 'name' ? e.target.value : +e.target.value 
    });
  }

  return (
    <form
      className="space-y-5 bg-white shadow-lg p-10 rounded-lg"
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoría:</label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={e => handleChange(e)}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Actividad:</label>
        <input
          id="name"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          type="text"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
          value={activity.name}
          onChange={e => handleChange(e)}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorías:</label>
        <input
          id="calories"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          type="number"
          placeholder="Calorías ej. 300 o 500"
          value={activity.calories}
          min={0}
          onChange={e => handleChange(e)}
        />
      </div>

      <input 
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-lg"
        value="Guardar Comida o Guardar Ejercicio" 
      />
    </form>
  )
}

export default Form;