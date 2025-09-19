/* eslint-disable default-param-last */
type StopWatchStateType<T> = {
	statusText: null | string
	timerEnd: null | T
	timerStart: null | T
}

type UpdateTimerAction<T> = {
	payload: T
	type: 'UPDATE_TIMER'
}

type UpdateStatusTextAction = {
	payload: string | null
	type: 'UPDATE_STATUS_TEXT'
}

type TimerStartAction<T> = {
	payload: {
		statusText: string
		timerEnd: T
		timerStart: T
	}
	type: 'TIMER_START'
}

type RestoreAction<T> = {
	payload: {
		timerEnd: T
		timerStart: T
	}
	type: 'TIMER_RESTORE'
}

type ResetAction = {
	type: 'RESET_STATE'
}

export type StopwatchAction<T extends number> =
	| UpdateStatusTextAction
	| UpdateTimerAction<T>
	| ResetAction
	| TimerStartAction<T>
	| RestoreAction<T>

export const initialState: StopWatchStateType<number> = {
	statusText: null,
	timerStart: null,
	timerEnd: null
}

export const stopwatchReducer = <T extends number>(
	state: typeof initialState = initialState,
	action: StopwatchAction<T>
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
