/* eslint-disable default-param-last */
type StopWatchStateType = {
	statusText: null | string
	timer: null | number
}

type UpdateTimerAction = {
	payload: number
	type: 'UPDATE_TIMER'
}

type UpdateStatusTextAction = {
	payload: string | null
	type: 'UPDATE_STATUS_TEXT'
}

type TimerStartAction = {
	payload: {
		statusText: string
		timer: number
	}
	type: 'TIMER_START'
}

type ResetAction = {
	type: 'RESET_STATE'
}

export type StopwatchAction =
	| UpdateStatusTextAction
	| UpdateTimerAction
	| ResetAction
	| TimerStartAction

export const initialState: StopWatchStateType = {
	statusText: null,
	timer: null
}

export const stopwatchReducer = (
	state: typeof initialState = initialState,
	action: StopwatchAction
) => {
	switch (action.type) {
		case 'TIMER_START': {
			const { timer, statusText } = action.payload

			return { ...state, statusText, timer }
		}
		case 'UPDATE_STATUS_TEXT': {
			return { ...state, statusText: action.payload }
		}
		case 'UPDATE_TIMER': {
			return { ...state, timer: action.payload }
		}
		case 'RESET_STATE': {
			state = initialState
			return state
		}
		default: {
			return state
		}
	}
}
