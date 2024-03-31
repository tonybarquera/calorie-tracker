import type { Activity } from "../types"

export interface ActivityActions {

}

interface ActivityState {
  activities: Activity[];
}

export const initialState: ActivityState = {
  activities: []
}

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
      
}