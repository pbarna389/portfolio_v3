/* eslint-disable default-param-last */
type StopWatchStateType = {
	statusText: null | string
	timerEnd: null | number
	timerStart: null | number
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
		timerEnd: number
		timerStart: number
	}
	type: 'TIMER_START'
}

type RestoreAction = {
	payload: {
		timerEnd: number
		timerStart: number
	}
	type: 'TIMER_RESTORE'
}

type ResetAction = {
	type: 'RESET_STATE'
}

export type StopwatchAction =
	| UpdateStatusTextAction
	| UpdateTimerAction
	| ResetAction
	| TimerStartAction
	| RestoreAction

export const initialState: StopWatchStateType = {
	statusText: null,
	timerStart: null,
	timerEnd: null
}

export const stopwatchReducer = (
	state: typeof initialState = initialState,
	action: StopwatchAction
) => {
	switch (action.type) {
		case 'TIMER_START': {
			const { timerStart, statusText, timerEnd } = action.payload

			return { ...state, statusText, timerStart, timerEnd }
		}
		case 'UPDATE_STATUS_TEXT': {
			return { ...state, statusText: action.payload }
		}
		case 'UPDATE_TIMER': {
			return { ...state, timerStart: action.payload }
		}
		case 'TIMER_RESTORE': {
			const { timerStart, timerEnd } = action.payload
			return { ...state, timerStart, timerEnd }
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
