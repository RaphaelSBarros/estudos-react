import { type } from "os";

const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long'}).format(today);
}

type Props = {
    name: string,
    avatar: string,
    roles: string[]
}

export const Person = ({ name, avatar, roles }: Props) => {



    return(
        <div className="p-3">
            <h1>{name}</h1>
            <img 
                src={avatar}
                alt={name}
                className="w-40"
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    );
}