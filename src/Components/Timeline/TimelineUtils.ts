import { TimeEvent } from '../TimeEvent/types'
import { TimelineEvent } from './TimelineEvent'
import DateUtils from '@/Utils/DateUtils'

export default {
    mapTimeEventToTimelineEvent(timeEvent: TimeEvent): TimelineEvent {
        return {
            id: timeEvent.id,
            date: DateUtils.stringToDayjsDate(timeEvent.startDate),
            eventName: timeEvent.name,
            description: timeEvent.description,
            eventIcon: {
                type: timeEvent.iconType,
                source: timeEvent.iconSource,
            },
        }
    },
    mapTimeEventsToTimelineEvents(
        timeEvents: Array<TimeEvent>
    ): Array<TimelineEvent> {
        return timeEvents
            .filter((event) => event !== null)
            .map((event) => this.mapTimeEventToTimelineEvent(event))
    },
}
