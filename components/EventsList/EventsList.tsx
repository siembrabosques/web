import {Event} from "../../lib/datasource/datasource";
import styled from '@emotion/styled';
import {format, parseISO} from 'date-fns'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {css} from "@emotion/css";


interface Props {
    className?: string
    events: Event[]
}

const EventsList = (props: Props) => {
    const router = useRouter()

    return (
        <div className={props.className}>
            <EventList className={props.className}>
                {
                    props.events.map(event => {
                        const link = event.eventLink || `/event/${event.slug}?originLang=${router.locale}`
                        return (
                            <Link href={link}
                                  passHref={true}
                                  locale={router.defaultLocale}
                                  key={event.slug}
                            >
                                <a>
                                    <li key={event.fileName} className={css`cursor: pointer`}>
                                        <EventTitle>
                                            <div>{format(parseISO(event.startDate), 'dd-MM-yyyy')} |</div>
                                            <div>{event.type}</div>
                                        </EventTitle>
                                        <div>
                                            {event.title}
                                        </div>
                                    </li>
                                </a>
                            </Link>
                        )
                    })
                }
            </EventList>
        </div>
    )
}

const EventList = styled.ul`
  list-style-type: none;

  li {
    display: flex;
    flex-direction: column;
  }
`
const EventTitle = styled.div`
  display: flex;

  div:first-of-type {
    color: lawngreen;
    margin-right: 4px;
  }

`
export default EventsList
