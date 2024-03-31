import { categories } from "../data/categories";

function Form() {
  return (
    <form
      className="space-y-5 bg-white shadow-lg p-10 rounded-lg"
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoría:</label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">Actividad:</label>
        <input
          id="activity"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          type="text"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorías:</label>
        <input
          id="calories"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          type="number"
          placeholder="Calorías ej. 300 o 500"
          min={0}
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