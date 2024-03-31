import { Dispatch, useMemo } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types"
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { ActivityActions } from "../reducers/activityReducer";

interface ActivityListProps {
  activities: Activity[];
  dispatch: Dispatch<ActivityActions>
}

export default function ActivityList({ activities, dispatch } : ActivityListProps) {
  const categoryName = useMemo(() => (category: Activity['category']) => categories[category - 1].name, [activities]);

  return (
    <>
      <h2 className="text-3xl font-bold text-salte-600 text-center">Comida y Actividades</h2>

      {activities.map(activity => (
        <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between rounded-lg shadow-lg">
          <div className="space-y-2 relative">
            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold rounded-lg shadow-lg ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500' }`}>{categoryName(+activity.category)}</p>
            <p className="text-2xl font-bold pt-5">{activity.name}</p>
            <p className="font-bold text-3xl text-lime-500">{activity.calories} <span>Calorías</span></p>
          </div>
          <div className="flex gap-5 items-center">
            <button onClick={() => dispatch({type: 'set-activity', payload: {id: activity.id}})}>
              <PencilSquareIcon 
                className="h-8 w-8 text-gray-800"
              />
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
